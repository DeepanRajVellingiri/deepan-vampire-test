import { useState } from 'react';
import { 
  Boxes, 
  Users, 
  Shield, 
  Database, 
  Key, 
  Brain, 
  Zap, 
  Globe, 
  Bell,
  Server,
  Lock,
  Settings,
  BarChart,
  Cloud,
  Network
} from 'lucide-react';

interface ComponentDetailProps {
  title: string;
  description: string;
  integrations: string[];
  dataFlow: string[];
  configuration: {
    env: string[];
    security: string[];
    monitoring: string[];
  };
}

function ComponentDetail({ title, description, integrations, dataFlow, configuration }: ComponentDetailProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
      <h4 className="text-lg font-medium text-gray-900 mb-3">{title}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="space-y-4">
        <div>
          <h5 className="text-sm font-medium text-gray-900 mb-2">Integrations</h5>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            {integrations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="text-sm font-medium text-gray-900 mb-2">Data Flow</h5>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            {dataFlow.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="text-sm font-medium text-gray-900 mb-2">Configuration</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h6 className="text-xs font-medium text-gray-700 mb-1">Environment</h6>
              <ul className="list-disc pl-5 text-xs text-gray-600">
                {configuration.env.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="text-xs font-medium text-gray-700 mb-1">Security</h6>
              <ul className="list-disc pl-5 text-xs text-gray-600">
                {configuration.security.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="text-xs font-medium text-gray-700 mb-1">Monitoring</h6>
              <ul className="list-disc pl-5 text-xs text-gray-600">
                {configuration.monitoring.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ComponentDiagram() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const components: Record<string, ComponentDetailProps> = {
    webapp: {
      title: " WebApp Permission Tab",
      description: "Frontend web application for managing Graph API permissions, built with React and TypeScript.",
      integrations: [
        "Integrates with Azure Entra ID for authentication",
        "Communicates with Azure Functions backend",
        "Connects to Azure OpenAI for intelligent suggestions",
        "Interfaces with Azure Monitoring for telemetry"
      ],
      dataFlow: [
        "User authentication flow through Azure Entra ID",
        "Permission requests to Azure Functions",
        "Real-time updates through WebSocket connections",
        "Telemetry data to Azure Monitoring"
      ],
      configuration: {
        env: [
          "VITE_AZURE_OPENAI_ENDPOINT",
          "VITE_AZURE_OPENAI_KEY",
          "VITE_AUTH_CLIENT_ID",
          "VITE_API_ENDPOINT"
        ],
        security: [
          "Azure Entra ID authentication",
          "CORS configuration",
          "Content Security Policy",
          "SSL/TLS encryption"
        ],
        monitoring: [
          "Application Insights integration",
          "User activity tracking",
          "Performance metrics",
          "Error logging"
        ]
      }
    },
    entraId: {
      title: "Azure Entra ID Groups",
      description: "Identity and access management service for authentication and authorization.",
      integrations: [
        "Integration with web application for authentication",
        "Role-based access control for permissions",
        "Group management for approvers",
        "Single sign-on capabilities"
      ],
      dataFlow: [
        "Authentication token issuance",
        "Group membership validation",
        "Role assignment verification",
        "User claims processing"
      ],
      configuration: {
        env: [
          "Tenant ID configuration",
          "Application registration",
          "API permissions",
          "Authentication settings"
        ],
        security: [
          "Multi-factor authentication",
          "Conditional access policies",
          "Token lifetime policies",
          "Security defaults"
        ],
        monitoring: [
          "Sign-in activity logs",
          "Audit logs",
          "Security reports",
          "Risk detections"
        ]
      }
    },
    keyvault: {
      title: "Azure Key Vault",
      description: "Secure storage for application secrets, keys, and certificates.",
      integrations: [
        "Secret management for applications",
        "Certificate storage and management",
        "Key rotation automation",
        "Access policy management"
      ],
      dataFlow: [
        "Secret retrieval requests",
        "Certificate management",
        "Key operations",
        "Access policy validation"
      ],
      configuration: {
        env: [
          "Access policies",
          "Network security",
          "Key rotation settings",
          "Backup configuration"
        ],
        security: [
          "RBAC configuration",
          "Network security groups",
          "Private endpoints",
          "Managed identities"
        ],
        monitoring: [
          "Access logs",
          "Operation logs",
          "Security alerts",
          "Metrics collection"
        ]
      }
    },
    openai: {
      title: "Azure OpenAI",
      description: "AI service for intelligent permission suggestions and analysis.",
      integrations: [
        "Integration with web application",
        "API endpoint configuration",
        "Model deployment management",
        "Rate limiting implementation"
      ],
      dataFlow: [
        "Permission analysis requests",
        "AI model responses",
        "Usage metrics",
        "Error handling"
      ],
      configuration: {
        env: [
          "Model configurations",
          "API endpoints",
          "Rate limits",
          "Response settings"
        ],
        security: [
          "API key management",
          "Network security",
          "Request validation",
          "Content filtering"
        ],
        monitoring: [
          "Usage metrics",
          "Performance monitoring",
          "Error tracking",
          "Cost analysis"
        ]
      }
    },
    functions: {
      title: "Azure Functions",
      description: "Serverless backend services for permission management and business logic.",
      integrations: [
        "Web application integration",
        "Database operations",
        "OpenAI service calls",
        "Graph API interactions"
      ],
      dataFlow: [
        "HTTP request handling",
        "Permission processing",
        "Approval workflow management",
        "Notification triggers"
      ],
      configuration: {
        env: [
          "Connection strings",
          "Function settings",
          "Scale configuration",
          "Runtime settings"
        ],
        security: [
          "Authentication",
          "Authorization",
          "CORS policies",
          "Network security"
        ],
        monitoring: [
          "Function metrics",
          "Performance monitoring",
          "Error logging",
          "Tracing"
        ]
      }
    },
    sqldb: {
      title: "Azure SQL Database",
      description: "Relational database for storing permission requests and approval workflows.",
      integrations: [
        "Azure Functions integration",
        "Data persistence",
        "Transaction management",
        "Backup and recovery"
      ],
      dataFlow: [
        "Permission request storage",
        "Approval workflow data",
        "Audit logging",
        "Historical tracking"
      ],
      configuration: {
        env: [
          "Connection strings",
          "Database settings",
          "Scaling configuration",
          "Backup settings"
        ],
        security: [
          "Firewall rules",
          "Authentication",
          "Data encryption",
          "Auditing"
        ],
        monitoring: [
          "Performance metrics",
          "Query monitoring",
          "Resource usage",
          "Alerts"
        ]
      }
    },
    graph: {
      title: "MS Graph API",
      description: "Microsoft Graph API for implementing and managing permissions.",
      integrations: [
        "Azure Functions integration",
        "Permission implementation",
        "User management",
        "Application management"
      ],
      dataFlow: [
        "Permission assignments",
        "User data access",
        "Application updates",
        "Directory operations"
      ],
      configuration: {
        env: [
          "API endpoints",
          "Authentication settings",
          "Permission scopes",
          "Version configuration"
        ],
        security: [
          "OAuth 2.0 setup",
          "Token validation",
          "Scope verification",
          "Rate limiting"
        ],
        monitoring: [
          "API metrics",
          "Usage tracking",
          "Error monitoring",
          "Performance analysis"
        ]
      }
    },
    monitoring: {
      title: "Azure Monitoring",
      description: "Comprehensive monitoring and alerting system for the entire application.",
      integrations: [
        "Application integration",
        "Log analytics",
        "Metric collection",
        "Alert management"
      ],
      dataFlow: [
        "Telemetry collection",
        "Log aggregation",
        "Metric processing",
        "Alert generation"
      ],
      configuration: {
        env: [
          "Workspace settings",
          "Collection rules",
          "Retention policies",
          "Alert configurations"
        ],
        security: [
          "Access control",
          "Data privacy",
          "Encryption settings",
          "Network security"
        ],
        monitoring: [
          "System health",
          "Resource metrics",
          "Log analysis",
          "Performance tracking"
        ]
      }
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Boxes className="h-6 w-6 text-blue-600 mr-2" />
          System Component Architecture
        </h2>
        <p className="text-gray-600">
          Interactive component diagram showing the relationships and integrations between system services.
        </p>
      </div>

      {/* Architecture Diagram */}
      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-8">
        <div className="relative">
          {/* User Actors */}
          <div className="absolute left-4 top-4 space-y-4">
          </div>

          {/* Main Components Grid */}
          <div className="grid grid-cols-3 gap-8 ml-32">
            {/* Row 1 */}
            <button 
              onClick={() => setSelectedComponent('entraId')}
              className="p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-colors"
            >
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-center">Azure Entra ID</div>
            </button>
            
            <button 
              onClick={() => setSelectedComponent('keyvault')}
              className="p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-colors"
            >
              <Key className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-center">Azure Key Vault</div>
            </button>
            
            <button 
              onClick={() => setSelectedComponent('sqldb')}
              className="p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-colors"
            >
              <Database className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-center">Azure SQL Database</div>
            </button>

            {/* Row 2 */}
            <button 
              onClick={() => setSelectedComponent('webapp')}
              className="p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-colors"
            >
              <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-center">Azure WebApp</div>
            </button>
            
            <button 
              onClick={() => setSelectedComponent('openai')}
              className="p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-colors"
            >
              <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-center">Azure OpenAI</div>
            </button>
            
            <button 
              onClick={() => setSelectedComponent('functions')}
              className="p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-colors"
            >
              <Zap className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-center">Azure Functions</div>
            </button>

            {/* Row 3 */}
            <button 
              onClick={() => setSelectedComponent('monitoring')}
              className="p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-colors"
            >
              <BarChart className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-center">Azure Monitoring</div>
            </button>
            
            <button 
              onClick={() => setSelectedComponent('graph')}
              className="p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-colors"
            >
              <Network className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-center">MS Graph API</div>
            </button>
            
            <div className="flex items-center justify-center">
              <Bell className="h-8 w-8 text-gray-400" />
              <div className="text-sm font-medium ml-2">Notifications</div>
            </div>
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: -1 }}>
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
              </marker>
            </defs>
            {/* Add your connection lines here with marker-end="url(#arrowhead)" */}
          </svg>
        </div>
      </div>

      {/* Component Details */}
      {selectedComponent && components[selectedComponent] && (
        <div className="mt-8">
          <ComponentDetail {...components[selectedComponent]} />
        </div>
      )}

      {/* Deployment Specifications */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Cloud className="h-5 w-5 text-blue-600 mr-2" />
            Infrastructure Requirements
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Server Configuration</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                <li>App Service Plan: Premium V3</li>
                <li>Minimum 2 instances for high availability</li>
                <li>Auto-scaling enabled</li>
                <li>Memory: 8GB per instance</li>
                <li>vCPUs: 2 per instance</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Network Topology</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                <li>Virtual Network integration</li>
                <li>Private endpoints for Azure services</li>
                <li>Application Gateway for load balancing</li>
                <li>Azure Front Door for global routing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Lock className="h-5 w-5 text-blue-600 mr-2" />
            Security & Scaling
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Security Measures</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                <li>Azure Entra ID authentication</li>
                <li>Network Security Groups</li>
                <li>Web Application Firewall</li>
                <li>DDoS protection</li>
                <li>SSL/TLS encryption</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Scaling Configuration</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                <li>Horizontal scaling: 2-10 instances</li>
                <li>CPU threshold: 70%</li>
                <li>Memory threshold: 80%</li>
                <li>Scale-out time: 5 minutes</li>
                <li>Scale-in time: 10 minutes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Details */}
      <div className="mt-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Settings className="h-5 w-5 text-blue-600 mr-2" />
            Configuration Management
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Environment Settings</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-xs text-gray-600 whitespace-pre-wrap">
{`# Azure Configuration
AZURE_LOCATION=eastus
AZURE_SUBSCRIPTION=prod

# App Settings
NODE_ENV=production
WEBSITE_NODE_DEFAULT_VERSION=~18
WEBSITE_RUN_FROM_PACKAGE=1

# Scaling
WEBSITE_HEALTHCHECK_MAXPINGFAILURES=2
WEBSITES_ENABLE_APP_SERVICE_STORAGE=true`}
                </pre>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Service Discovery</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-xs text-gray-600 whitespace-pre-wrap">
{`# Endpoints
VITE_API_ENDPOINT=https://api.example.com
VITE_AUTH_ENDPOINT=https://login.microsoftonline.com
VITE_GRAPH_ENDPOINT=https://graph.microsoft.com

# Service Discovery
AZURE_SERVICE_DISCOVERY_MODE=dns
SERVICE_DISCOVERY_INTERVAL=300`}
                </pre>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Monitoring Setup</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-xs text-gray-600 whitespace-pre-wrap">
{`# Application Insights
APPINSIGHTS_INSTRUMENTATIONKEY=your-key
APPLICATIONINSIGHTS_CONNECTION_STRING=your-connection-string

# Logging
LOG_LEVEL=info
WEBSITE_HTTPLOGGING_RETENTION_DAYS=7
DIAGNOSTICS_AZUREBLOBRETENTIONDAYS=30`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}