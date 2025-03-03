import { 
  Code, 
  Shield, 
  Zap, 
  Server, 
  Database, 
  GitBranch, 
  Globe,
  Layers,
  Monitor,
  Lock,
  FileText,
  Users,
  Clock,
  Brain
} from 'lucide-react';

export function NonFunctionalRequirements() {
  const requirements = [
    {
      id: 'nfr-1',
      category: 'Technology Stack',
      icon: <Code className="h-5 w-5 text-blue-600" />,
      items: [
        {
          title: 'Frontend',
          details: [
            'React 18.3+ with TypeScript',
            'Vite for build and development',
            'Tailwind CSS for styling',
            'React Router for navigation',
            'Lucide React for icons',
            'Context API for state management'
          ]
        },
        {
          title: 'Backend',
          details: [
            'Azure Functions (Node.js)',
            'TypeScript',
            'Azure SQL Database',
            'Azure Key Vault for secrets'
          ]
        }
      ]
    },
    {
      id: 'nfr-2',
      category: 'Azure Services',
      icon: <Server className="h-5 w-5 text-purple-600" />,
      items: [
        {
          title: 'Core Services',
          details: [
            'Azure Entra ID for authentication and authorization',
            'Azure Functions for serverless API endpoints',
            'Azure SQL Database for data storage',
            'Azure Key Vault for secure credential management',
            'Azure OpenAI for intelligent suggestions',
            'Azure Storage for file storage',
            'Azure Monitor for application insights'
          ]
        },
        {
          title: 'Supporting Services',
          details: [
            'Azure App Service for web hosting',
            'Azure API Management',
            'Azure Logic Apps for workflow automation',
            'Azure Event Grid for event handling',
            'Azure CDN for content delivery'
          ]
        }
      ]
    },
    {
      id: 'nfr-3',
      category: 'Security Requirements',
      icon: <Shield className="h-5 w-5 text-red-600" />,
      items: [
        {
          title: 'Authentication & Authorization',
          details: [
            'Azure Entra ID integration',
            'Role-based access control (RBAC)',
            'Multi-factor authentication support',
            'JWT token-based authentication',
            'Fine-grained permission controls'
          ]
        },
        {
          title: 'Data Protection',
          details: [
            'Encryption at rest and in transit',
            'Secure handling of sensitive information',
            'Data masking for sensitive fields',
            'Secure API endpoints with proper authentication',
            'Regular security audits and penetration testing'
          ]
        }
      ]
    },
    {
      id: 'nfr-4',
      category: 'Performance Requirements',
      icon: <Zap className="h-5 w-5 text-yellow-600" />,
      items: [
        {
          title: 'Response Times',
          details: [
            'Page load time < 2 seconds',
            'API response time < 500ms',
            'AI suggestions response time < 1 second',
            'Search results displayed within 300ms',
            'Dashboard rendering < 3 seconds'
          ]
        },
        {
          title: 'Scalability',
          details: [
            'Support for 1000+ concurrent users',
            'Handle 10,000+ permission requests per day',
            'Efficient caching mechanisms',
            'Horizontal scaling capabilities',
            'Load balancing for high availability'
          ]
        }
      ]
    },
    {
      id: 'nfr-5',
      category: 'DevOps & CI/CD',
      icon: <GitBranch className="h-5 w-5 text-green-600" />,
      items: [
        {
          title: 'Source Control',
          details: [
            'Azure DevOps Git repositories',
            'Feature branch workflow',
            'Pull request reviews',
            'Branch policies and protection',
            'Automated code quality checks'
          ]
        },
        {
          title: 'CI/CD Pipeline',
          details: [
            'Azure DevOps Pipelines',
            'Automated builds and testing',
            'Environment-specific deployments (Dev, QA, Prod)',
            'Infrastructure as Code (IaC) with Azure Resource Manager',
            'Automated deployment verification',
            'Rollback capabilities'
          ]
        }
      ]
    },
    {
      id: 'nfr-6',
      category: 'Monitoring & Logging',
      icon: <Monitor className="h-5 w-5 text-indigo-600" />,
      items: [
        {
          title: 'Application Monitoring',
          details: [
            'Azure Application Insights integration',
            'Real-time performance monitoring',
            'Error tracking and alerting',
            'User behavior analytics',
            'Custom dashboards for system health'
          ]
        },
        {
          title: 'Logging',
          details: [
            'Structured logging with correlation IDs',
            'Different log levels (Info, Warning, Error, Debug)',
            'Centralized log storage and analysis',
            'Audit logging for security-relevant events',
            'Log retention policies'
          ]
        }
      ]
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Code className="h-6 w-6 text-blue-600 mr-2" />
          Non-Functional Requirements
        </h2>
        <p className="text-gray-600">
          The following non-functional requirements define the technical infrastructure, performance characteristics, security measures, and operational aspects of the Graph Permissions system.
        </p>
      </div>

      <div className="space-y-8">
        {requirements.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
            <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center">
                {category.icon}
                <h3 className="ml-2 text-lg font-medium text-gray-900">{category.category}</h3>
              </div>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3">{item.title}</h4>
                    <ul className="space-y-2">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-medium text-blue-900 mb-4 flex items-center">
            <Globe className="h-5 w-5 text-blue-600 mr-2" />
            Compatibility
          </h3>
          <ul className="space-y-2 text-blue-700">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
              <span>Modern browsers (Chrome, Firefox, Edge, Safari)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
              <span>Responsive design for desktop and tablet</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
              <span>Accessibility compliance (WCAG 2.1 AA)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
              <span>Cross-browser compatibility</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
          <h3 className="text-lg font-medium text-green-900 mb-4 flex items-center">
            <Clock className="h-5 w-5 text-green-600 mr-2" />
            Reliability & Availability
          </h3>
          <ul className="space-y-2 text-green-700">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
              <span>99.9% uptime SLA</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
              <span>Fault tolerance and graceful degradation</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
              <span>Automated backup and recovery</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
              <span>Disaster recovery plan</span>
            </li>
          </ul>
        </div>

        <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
          <h3 className="text-lg font-medium text-purple-900 mb-4 flex items-center">
            <Brain className="h-5 w-5 text-purple-600 mr-2" />
            AI Integration
          </h3>
          <ul className="space-y-2 text-purple-700">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
              <span>Azure OpenAI Service (GPT-4)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
              <span>Prompt engineering for optimal results</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
              <span>Response caching for performance</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
              <span>Fallback mechanisms for AI unavailability</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}