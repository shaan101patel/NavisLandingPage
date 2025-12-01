import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';

export async function POST(request) {
    try {
        console.log('🚀 Waitlist API called');

        const { email, name } = await request.json();
        console.log('📝 Form data received:', { name, email });

        if (!email || !name) {
            console.log('❌ Missing required fields');
            return NextResponse.json(
                { error: 'Email and name are required' },
                { status: 400 }
            );
        }

        // Load service account credentials
        const credentialsPath = path.join(process.cwd(), 'google.json');
        console.log('📁 Credentials path:', credentialsPath);
        // Check if credentials file exists
        if (!fs.existsSync(credentialsPath)) {
            console.log('❌ Credentials file not found at:', credentialsPath);
            return NextResponse.json(
                { error: 'Server configuration error: credentials not found' },
                { status: 500 }
            );
        }

        const auth = new google.auth.GoogleAuth({
            keyFile: credentialsPath,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });    // Your Google Sheet ID
        const spreadsheetId = '1LGetmd8iEDUvdvGvbzlnCF0rTxhmunWwgwz3f3IC2Tc';
        // Get current timestamp
        const timestamp = new Date().toISOString();
        console.log('⏰ Timestamp:', timestamp);

        console.log('📊 Attempting to write to Google Sheet:', spreadsheetId);

        // Append data to the sheet
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A:C', // Adjust range as needed
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[timestamp, name, email]],
            },
        });

        console.log('✅ Data appended successfully:', response.data); return NextResponse.json(
            { message: 'Successfully added to waitlist!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('❌ Error adding to waitlist:', error);

        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        // More specific error messages
        if (errorMessage?.includes('Unable to parse range')) {
            return NextResponse.json(
                { error: 'Google Sheet configuration error. Please check the sheet setup.' },
                { status: 500 }
            );
        }

        if (errorMessage?.includes('not found')) {
            return NextResponse.json(
                { error: 'Google Sheet not found. Please check the Sheet ID and permissions.' },
                { status: 500 }
            );
        }

        if (errorMessage?.includes('permission')) {
            return NextResponse.json(
                { error: 'Permission denied. Please share the sheet with the service account.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to add to waitlist. Please try again.' },
            { status: 500 }
        );
    }
}
