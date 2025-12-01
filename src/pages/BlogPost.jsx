import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CalendarBlank, User, ArrowLeft } from 'phosphor-react';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();

    const articles = {
        'rag-revolutionizing-call-center-efficiency': {
            title: 'RAG: Revolutionizing Call Center Efficiency',
            author: 'Sarah Chen',
            date: 'December 15, 2024',
            readTime: '8 min read',
            content: `
        <h2>The Problem with Traditional Call Center AI</h2>
        <p>For years, call centers have relied on static knowledge bases and rigid scripts. Agents waste precious minutes searching for information while customers wait on hold. The result? Frustrated customers, burned-out agents, and lost revenue.</p>
        
        <p>Traditional AI chatbots, while helpful, often fall short because they lack context. They can't access real-time conversation data or adapt to unique customer situations. This is where Retrieval-Augmented Generation (RAG) changes everything.</p>

        <h2>What is RAG?</h2>
        <p>RAG combines the best of two worlds: the precise information retrieval of search systems and the natural language generation capabilities of large language models. When integrated into call center workflows, RAG systems can:</p>
        
        <ul>
          <li>Access company knowledge bases in real-time during live calls</li>
          <li>Pull relevant information from past tickets and conversations</li>
          <li>Generate contextually appropriate responses based on the current conversation</li>
          <li>Adapt suggestions as the conversation evolves</li>
        </ul>

        <h2>Real-World Impact</h2>
        <p>At Navis, we've seen RAG transform customer support operations across industries. One financial services client reduced average handle time by 40% while simultaneously improving customer satisfaction scores by 25%. How? By giving agents instant access to the right information at exactly the right moment.</p>

        <p>Another healthcare provider used RAG to ensure compliance while maintaining empathy. The system pulls from approved response templates and regulatory guidelines, helping agents navigate complex situations with confidence.</p>

        <h2>The Future of Customer Support</h2>
        <p>RAG isn't about replacing human agents—it's about empowering them. By handling the cognitive load of information retrieval, RAG frees agents to focus on what they do best: building relationships and solving complex problems.</p>

        <p>As RAG technology continues to evolve, we're seeing even more sophisticated applications: predictive assistance that anticipates customer needs, multi-modal RAG that incorporates images and documents, and federated RAG systems that work across multiple knowledge sources.</p>
      `
        },
        'real-time-transcription-best-practices': {
            title: 'Real-Time Transcription Best Practices',
            author: 'Michael Rodriguez',
            date: 'December 10, 2024',
            readTime: '6 min read',
            content: `
        <h2>Why Real-Time Transcription Matters</h2>
        <p>In today's fast-paced customer service environment, every second counts. Real-time transcription provides agents with an instant written record of conversations, enabling better note-taking, compliance, and follow-up.</p>

        <h2>Implementation Best Practices</h2>
        <p>Successfully deploying real-time transcription requires careful planning. Here are the key best practices we've learned from helping hundreds of organizations:</p>

        <h3>1. Ensure Audio Quality</h3>
        <p>Transcription accuracy depends heavily on audio quality. Invest in high-quality microphones, reduce background noise, and use noise-cancellation technology where possible. Even the best AI can't transcribe mumbled or distorted audio.</p>

        <h3>2. Train Your Team</h3>
        <p>Don't just deploy the technology—train your agents on how to use it effectively. Show them how to quickly scan transcripts for key information, how to correct errors, and how to leverage transcripts for better customer interactions.</p>

        <h3>3. Choose Platform-Agnostic Solutions</h3>
        <p>Your organization likely uses multiple communication platforms: Zoom for video calls, traditional phone systems for support, maybe Slack for internal comms. Choose a transcription solution that works seamlessly across all platforms.</p>

        <h3>4. Prioritize Privacy and Compliance</h3>
        <p>Customer conversations often contain sensitive information. Ensure your transcription system is HIPAA-compliant (for healthcare), PCI-DSS compliant (for financial services), and GDPR-compliant (for EU customers). Implement proper data retention policies and encryption.</p>

        <h2>Measuring Success</h2>
        <p>Track these key metrics to measure the impact of your transcription implementation:</p>
        <ul>
          <li>Average handle time (should decrease)</li>
          <li>First call resolution rate (should increase)</li>
          <li>Customer satisfaction scores</li>
          <li>Compliance adherence rates</li>
          <li>Agent productivity and satisfaction</li>
        </ul>

        <h2>Common Pitfalls to Avoid</h2>
        <p>Many organizations make these mistakes when implementing transcription. Learn from their experiences and avoid these pitfalls from the start.</p>
      `
        },
        'analytics-that-drive-sales-conversions': {
            title: 'Analytics That Drive Sales Conversions',
            author: 'Emily Thompson',
            date: 'December 5, 2024',
            readTime: '7 min read',
            content: `
        <h2>The Power of Call Analytics</h2>
        <p>Every sales call is a goldmine of data. Sentiment shifts, objection patterns, successful closing techniques—all hiding in plain sight. The question isn't whether this data exists, but whether you're capturing and using it.</p>

        <h2>Key Metrics That Matter</h2>
        <p>Not all metrics are created equal. Focus on these high-impact analytics that directly correlate with conversion rates:</p>

        <h3>Talk-to-Listen Ratio</h3>
        <p>The best sales reps listen more than they talk. Our data shows that conversations with a 43:57 talk-to-listen ratio (agent talking 43% of the time) have the highest conversion rates. Too much talking signals pushy selling; too much listening may indicate a lack of engagement.</p>

        <h3>Sentiment Trends</h3>
        <p>Track how customer sentiment evolves throughout the conversation. Successful sales calls typically show a positive sentiment trend, even if the customer starts skeptical. Sharp drops in sentiment are red flags that need immediate attention.</p>

        <h3>Objection Handling Effectiveness</h3>
        <p>AI can identify common objections and track how different agents handle them. When you discover that certain responses to pricing objections increase conversion by 25%, you can train your entire team on that technique.</p>

        <h3>Question Quality</h3>
        <p>Not all questions are equal. Open-ended discovery questions correlate with higher conversion rates than yes/no questions. Analytics can track question types and help agents improve their discovery process.</p>

        <h2>Turning Insights Into Action</h2>
        <p>Data without action is just noise. Here's how to transform analytics into revenue:</p>

        <ul>
          <li><strong>Weekly coaching sessions:</strong> Use conversation analytics to identify specific coaching opportunities for each rep</li>
          <li><strong>Playbook refinement:</strong> Update sales scripts based on what actually works in real conversations</li>
          <li><strong>Predictive scoring:</strong> Use historical data to predict which leads are most likely to convert</li>
          <li><strong>Real-time guidance:</strong> Alert reps during calls when sentiment drops or opportunities arise</li>
        </ul>

        <h2>Real Results</h2>
        <p>One SaaS company we work with increased their sales conversion rate from 18% to 24% in just three months by implementing conversation analytics. The secret? They focused on replicating the behaviors of their top performers across the entire team.</p>
      `
        },
        'adaptive-scripts-for-support-wins': {
            title: 'Adaptive Scripts for Support Wins',
            author: 'David Kim',
            date: 'December 1, 2024',
            readTime: '5 min read',
            content: `
        <h2>The Problem with Static Scripts</h2>
        <p>Traditional call scripts are rigid. They assume every customer interaction follows the same path, but reality is messier. Customers interrupt, go off-topic, or present unique situations that don't fit the script.</p>

        <p>When agents are forced to stick to static scripts, several problems emerge:</p>
        <ul>
          <li>Robotic, impersonal interactions that frustrate customers</li>
          <li>Longer resolution times as agents struggle to find the right script</li>
          <li>Lower agent satisfaction and higher turnover</li>
          <li>Missed opportunities to upsell or cross-sell</li>
        </ul>

        <h2>Enter Adaptive Scripts</h2>
        <p>Adaptive scripts use AI to provide dynamic, context-aware guidance that changes based on the conversation flow. Instead of rigidly following a predetermined path, adaptive scripts:</p>

        <ul>
          <li>Analyze the conversation in real-time</li>
          <li>Detect customer intent and sentiment</li>
          <li>Surface relevant responses from a library of proven techniques</li>
          <li>Adjust recommendations as the conversation evolves</li>
        </ul>

        <h2>Implementation Strategies</h2>
        <p>Rolling out adaptive scripts requires more than just technology—it requires a culture shift. Here's how to do it right:</p>

        <h3>Start with Your Best Performers</h3>
        <p>Record and analyze calls from your top-performing agents. What phrases do they use? How do they handle objections? Build your adaptive script library from these proven techniques.</p>

        <h3>Gradual Rollout</h3>
        <p>Don't force adaptive scripts on your entire team overnight. Start with a pilot group, gather feedback, and iterate. Some agents will embrace the technology immediately; others will need more support.</p>

        <h3>Measure and Optimize</h3>
        <p>Track which script suggestions agents actually use and which they ignore. High ignore rates indicate the AI needs better training data or that certain suggestions aren't helpful.</p>

        <h2>Success Stories</h2>
        <p>A major telecom company reduced average handle time by 35% after implementing adaptive scripts. New agents reached proficiency 50% faster because they had instant access to the collective knowledge of the entire support team.</p>

        <p>The key was personalization. Instead of one-size-fits-all scripts, each agent received suggestions tailored to their experience level, the customer's history, and the current conversation context.</p>
      `
        }
    };

    const article = articles[slug];

    if (!article) {
        return (
            <>
                <Navbar />
                <div className="blog-post-page">
                    <div className="container">
                        <h1>Article not found</h1>
                        <Link to="/blog" className="back-link">
                            <ArrowLeft size={20} weight="light" />
                            Back to Blog
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="blog-post-page">
                <article className="blog-post">
                    <div className="container">
                        <Link to="/blog" className="back-link">
                            <ArrowLeft size={20} weight="light" />
                            Back to Blog
                        </Link>

                        <header className="post-header">
                            <h1>{article.title}</h1>
                            <div className="post-meta">
                                <div className="meta-item">
                                    <User size={18} weight="light" />
                                    <span>{article.author}</span>
                                </div>
                                <div className="meta-item">
                                    <CalendarBlank size={18} weight="light" />
                                    <span>{article.date}</span>
                                </div>
                                <div className="meta-item">
                                    <span>{article.readTime}</span>
                                </div>
                            </div>
                        </header>

                        <div
                            className="post-content"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        <div className="post-cta glass-card">
                            <h3>Ready to transform your customer interactions?</h3>
                            <p>Join 1,000+ teams using Navis to deliver exceptional experiences</p>
                            <a href="https://navis-copilot-front-end-pr-1-0.vercel.app/" className="btn-primary" target="_blank" rel="noopener noreferrer">Get Started</a>
                        </div>
                    </div>
                </article>
            </div>
            <Footer />
        </>
    );
};

export default BlogPost;
