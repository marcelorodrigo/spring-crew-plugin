import rubberDuckMd from '../../agents/rubber-duck.agent.md';
import architectMd from '../../agents/architect.agent.md';
import implementerMd from '../../agents/implementer.agent.md';
import codeReviewerMd from '../../agents/code-reviewer.agent.md';

import { parseAgentMd } from './parse-agent-md';

interface AgentConfig {
  description: string;
  prompt: string;
}

function buildAgentConfigs(): Record<string, AgentConfig> {
  const sources: Record<string, string> = {
    'spring-crew:rubber-duck': rubberDuckMd,
    'spring-crew:architect': architectMd,
    'spring-crew:implementer': implementerMd,
    'spring-crew:code-reviewer': codeReviewerMd,
  };

  const agents: Record<string, AgentConfig> = {};

  for (const [key, raw] of Object.entries(sources)) {
    const { name, description, prompt } = parseAgentMd(raw);
    agents[key] = {
      description: `${name} — ${description}`,
      prompt,
    };
  }

  return agents;
}

export const agents = buildAgentConfigs();
