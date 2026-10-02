import Script from 'next/script';

/** The client's JotForm AI agent: https://agent.jotform.com/<AGENT_ID> */
const AGENT_ID = '0197a6a18fd57f129b7a6bd52cd6121c7a38';

/**
 * Loads the client's JotForm AI agent, which renders its own floating launcher in the
 * bottom-right corner. This replaced the placeholder chat widget the brief asked for.
 *
 * `lazyOnload` keeps it off the critical path — the agent is useful, but never worth
 * delaying the page content for. To swap in a different agent, change AGENT_ID; to remove
 * it entirely, drop <ChatAgent /> from app/layout.tsx.
 *
 * Note: this is third-party code served from JotForm's CDN and may set its own cookies.
 */
export default function ChatAgent() {
  return (
    <Script
      src={`https://cdn.jotfor.ms/agent/embedjs/${AGENT_ID}/embed.js?maximizable=1`}
      strategy="lazyOnload"
    />
  );
}
