import { Layers, Server, Database, Shield, Brain, Bell, Globe, Key, Code, Users } from 'lucide-react';

export function ArchitectureDiagram() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Layers className="h-6 w-6 text-blue-600 mr-2" />
          Architecture Blueprint
        </h2>
        <p className="text-gray-600">
          This diagram provides a comprehensive view of the system architecture, including all Azure services, integration points, and data flows. It illustrates how different components work together to deliver the Graph Permissions system functionality.
        </p>
      </div>

      {/* Visual Architecture Diagram */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8 overflow-x-auto">
        <div className="min-w-[1000px] min-h-[700px] relative">
          {/* Client Layer */}
          <div className="absolute top-0 left-0 right-0 h-[100px] border-2 border-blue-300 rounded-lg bg-blue-50 p-4">
            <h3 className="text-md font-medium text-blue-800 mb-3">Client Layer</h3>
            <div className="flex justify-center space-x-8">
              <div className="bg-white p-3 rounded border border-blue-200 text-center w-40">
                <Users className="h-5 w-5 mx-auto mb-1 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Web Browser</span>
                <div className="mt-1 text-xs text-blue-600">React SPA</div>
              </div>
              <div className="bg-white p-3 rounded border border-blue-200 text-center w-40">
                <Users className="h-5 w-5 mx-auto mb-1 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Mobile Browser</span>
                <div className="mt-1 text-xs text-blue-600">Responsive UI</div>
              </div>
            </div>
          </div>

          {/* Hosting Layer */}
          <div className="absolute top-[130px] left-0 right-0 h-[100px] border-2 border-green-300 rounded-lg bg-green-50 p-4">
            <h3 className="text-md font-medium text-green-800 mb-3">Hosting Layer</h3>
            <div className="flex justify-center">
              <div className="bg-white p-3 rounded border border-green-200 text-center w-64">
                <Server className="h-5 w-5 mx-auto mb-1 text-green-600" />
                <span className="text-sm font-medium text-green-700">Azure App Service</span>
                <div className="mt-1 text-xs text-green-600">Web Hosting</div>
              </div>
            </div>
          </div>

          {/* API Gateway Layer */}
          <div className="absolute top-[260px] left-0 right-0 h-[100px] border-2 border-purple-300 rounded-lg bg-purple-50 p-4">
            <h3 className="text-md font-medium text-purple-800 mb-3">API Gateway Layer</h3>
            <div className="flex justify-center">
              <div className="bg-white p-3 rounded border border-purple-200 text-center w-64">
                <Globe className="h-5 w-5 mx-auto mb-1 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">Azure API Management</span>
                <div className="mt-1 text-xs text-purple-600">API Gateway & Management</div>
              </div>
            </div>
          </div>

          {/* Service Layer */}
          <div className="absolute top-[390px] left-0 right-0 h-[150px] border-2 border-red-300 rounded-lg bg-red-50 p-4">
            <h3 className="text-md font-medium text-red-800 mb-3">Service Layer</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white p-3 rounded border border-red-200 text-center">
                <Server className="h-5 w-5 mx-auto mb-1 text-red-600" />
                <span className="text-sm font-medium text-red-700">Permission Service</span>
                <div className="mt-1 text-xs text-red-600">Azure Functions</div>
              </div>
              <div className="bg-white p-3 rounded border border-red-200 text-center">
                <Server className="h-5 w-5 mx-auto mb-1 text-red-600" />
                <span className="text-sm font-medium text-red-700">Approval Service</span>
                <div className="mt-1 text-xs text-red-600">Azure Functions</div>
              </div>
              <div className="bg-white p-3 rounded border border-red-200 text-center">
                <Server className="h-5 w-5 mx-auto mb-1 text-red-600" />
                <span className="text-sm font-medium text-red-700">Notification Service</span>
                <div className="mt-1 text-xs text-red-600">Azure Functions</div>
              </div>
              <div className="bg-white p-3 rounded border border-red-200 text-center">
                <Server className="h-5 w-5 mx-auto mb-1 text-red-600" />
                <span className="text-sm font-medium text-red-700">Analytics Service</span>
                <div className="mt-1 text-xs text-red-600">Azure Functions</div>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="bg-white p-2 rounded border border-red-200 text-center w-48">
                <Code className="h-4 w-4 mx-auto mb-1 text-red-600" />
                <span className="text-xs font-medium text-red-700">Serverless Functions (Node.js)</span>
              </div>
            </div>
          </div>

          {/* Integration Layer */}
          <div className="absolute top-[570px] left-0 right-0 h-[100px] border-2 border-yellow-300 rounded-lg bg-yellow-50 p-4">
            <h3 className="text-md font-medium text-yellow-800 mb-3">Integration Layer</h3>
            <div className="flex justify-center space-x-8">
              <div className="bg-white p-3 rounded border border-yellow-200 text-center w-48">
                <Brain className="h-5 w-5 mx-auto mb-1 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-700">Azure OpenAI</span>
                <div className="mt-1 text-xs text-yellow-600">AI Suggestions</div>
              </div>
              <div className="bg-white p-3 rounded border border-yellow-200 text-center w-48">
                <Globe className="h-5 w-5 mx-auto mb-1 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-700">Microsoft Graph API</span>
                <div className="mt-1 text-xs text-yellow-600">Permission Implementation</div>
              </div>
            </div>
          </div>

          {/* Data Layer */}
          <div className="absolute top-[700px] left-0 right-0 h-[100px] border-2 border-indigo-300 rounded-lg bg-indigo-50 p-4">
            <h3 className="text-md font-medium text-indigo-800 mb-3">Data Layer</h3>
            <div className="flex justify-center space-x-8">
              <div className="bg-white p-3 rounded border border-indigo-200 text-center w-40">
                <Database className="h-5 w-5 mx-auto mb-1 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700">Azure SQL Database</span>
                <div className="mt-1 text-xs text-indigo-600">Relational Data</div>
              </div>
              <div className="bg-white p-3 rounded border border-indigo-200 text-center w-40">
                <Database className="h-5 w-5 mx-auto mb-1 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700">Azure Storage</span>
                <div className="mt-1 text-xs text-indigo-600">File Storage</div>
              </div>
              <div className="bg-white p-3 rounded border border-indigo-200 text-center w-40">
                <Key className="h-5 w-5 mx-auto mb-1 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700">Azure Key Vault</span>
                <div className="mt-1 text-xs text-indigo-600">Secrets Management</div>
              </div>
            </div>
          </div>

          {/* Cross-Cutting Concerns */}
          <div className="absolute top-[260px] right-[-180px] w-[160px] h-[400px] border-2 border-gray-300 rounded-lg bg-gray-50 p-4">
            <h3 className="text-md font-medium text-gray-800 mb-3">Cross-Cutting Concerns</h3>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded border border-gray-200 text-center">
                <Shield className="h-4 w-4 mx-auto mb-1 text-gray-600" />
                <span className="text-xs font-medium text-gray-700">Azure Entra ID</span>
                <div className="mt-1 text-xs text-gray-600">Authentication</div>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200 text-center">
                <Shield className="h-4 w-4 mx-auto mb-1 text-gray-600" />
                <span className="text-xs font-medium text-gray-700">Security</span>
                <div className="mt-1 text-xs text-gray-600">RBAC & Encryption</div>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200 text-center">
                <Bell className="h-4 w-4 mx-auto mb-1 text-gray-600" />
                <span className="text-xs font-medium text-gray-700">Monitoring</span>
                <div className="mt-1 text-xs text-gray-600">Application Insights</div>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200 text-center">
                <Server className="h-4 w-4 mx-auto mb-1 text-gray-600" />
                <span className="text-xs font-medium text-gray-700">DevOps</span>
                <div className="mt-1 text-xs text-gray-600">CI/CD Pipeline</div>
              </div>
            </div>
          </div>

          {/* Arrows */}
          {/* Client to Hosting */}
          <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 h-[30px] w-[2px] bg-blue-400"></div>
          <div className="absolute top-[110px] left-1/2 transform -translate-x-1/2 w-[10px] h-[10px] border-r-2 border-b-2 border-blue-400 rotate-45"></div>

          {/* Hosting to API Gateway */}
          <div className="absolute top-[230px] left-1/2 transform -translate-x-1/2 h-[30px] w-[2px] bg-green-400"></div>
          <div className="absolute top-[240px] left-1/2 transform -translate-x-1/2 w-[10px] h-[10px] border-r-2 border-b-2 border-green-400 rotate-45"></div>

          {/* API Gateway to Service Layer */}
          <div className="absolute top-[360px] left-1/2 transform -translate-x-1/2 h-[30px] w-[2px] bg-purple-400"></div>
          <div className="absolute top-[370px] left-1/2 transform -translate-x-1/2 w-[10px] h-[10px] border-r-2 border-b-2 border-purple-400 rotate-45"></div>

          {/* Service Layer to Integration Layer */}
          <div className="absolute top-[540px] left-1/2 transform -translate-x-1/2 h-[30px] w-[2px] bg-red-400"></div>
          <div className="absolute top-[550px] left-1/2 transform -translate-x-1/2 w-[10px] h-[10px] border-r-2 border-b-2 border-red-400 rotate-45"></div>

          {/* Integration Layer to Data Layer */}
          <div className="absolute top-[670px] left-1/2 transform -translate-x-1/2 h-[30px] w-[2px] bg-yellow-400"></div>
          <div className="absolute top-[680px] left-1/2 transform -translate-x-1/2 w-[10px] h-[10px] border-r-2 border-b-2 border-yellow-400 rotate-45"></div>

          {/* Service Layer to Cross-Cutting */}
          <div className="absolute top-[465px] right-[20px] w-[140px] h-[2px] bg-gray-400"></div>
          <div className="absolute top-[465px] right-[30px] w-[10px] h-[10px] border-t-2 border-r-2 border-gray-400 rotate-45"></div>
        </div>
      </div>

      {/* Architecture Details */}
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-blue-50 border-b border-blue-200">
            <div className="flex items-center">
              <Layers className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-medium text-blue-900">Architecture Overview</h3>
            </div>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <p className="text-gray-600 mb-4">
              The Graph Permissions system follows a modern cloud-native architecture based on Azure services. It employs a layered approach with clear separation of concerns, microservices for scalability, and integration with Azure's security and AI capabilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">Key Architectural Principles</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                    <span>Layered architecture with clear boundaries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                    <span>Microservices-based approach for scalability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                    <span>Serverless computing for cost optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                    <span>Cloud-native design leveraging Azure PaaS</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">Architectural Benefits</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                    <span>Scalability to handle varying workloads</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                    <span>High availability through redundancy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                    <span>Security by design with Azure services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                    <span>Cost optimization with serverless components</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-green-50 border-b border-green-200">
            <div className="flex items-center">
              <Server className="h-5 w-5 text-green-600 mr-2" />
              <h3 className="text-lg font-medium text-green-900">Azure Services Integration</h3>
            </div>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">Compute Services</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                    <span><strong>Azure App Service:</strong> Hosts the web frontend</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                    <span><strong>Azure Functions:</strong> Serverless API endpoints</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                    <span><strong>Azure Logic Apps:</strong> Workflow automation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">Data Services</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                    <span><strong>Azure SQL Database:</strong> Primary data storage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                    <span><strong>Azure Storage:</strong> File and blob storage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                    <span><strong>Azure Cache for Redis:</strong> Performance caching</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">Integration Services</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                    <span><strong>Azure API Management:</strong> API gateway</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                    <span><strong>Azure Event Grid: </strong> Event-driven architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                    <span><strong>Azure Service Bus:</strong> Message queuing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-purple-50 border-b border-purple-200">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-purple-600 mr-2" />
              <h3 className="text-lg font-medium text-purple-900">Security Architecture</h3>
            </div>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">Authentication & Authorization</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                    <span><strong>Azure Entra ID:</strong> Identity management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                    <span><strong>Role-Based Access Control:</strong> Permission management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                    <span><strong>JWT Tokens:</strong> Secure API access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                    <span><strong>OAuth 2.0/OpenID Connect:</strong> Authentication protocols</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">Data Protection</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                    <span><strong>Azure Key Vault:</strong> Secret management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                    <span><strong>TLS/SSL:</strong> Encryption in transit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                    <span><strong>Transparent Data Encryption:</strong> Encryption at rest</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                    <span><strong>Azure Security Center:</strong> Security monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-red-50 border-b border-red-200">
            <div className="flex items-center">
              <Brain className="h-5 w-5 text-red-600 mr-2" />
              <h3 className="text-lg font-medium text-red-900">AI Integration Architecture</h3>
            </div>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <p className="text-gray-600 mb-4">
              The system integrates Azure OpenAI to provide intelligent permission suggestions and insights. This architecture ensures efficient AI integration while maintaining performance and reliability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">AI Components</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-1.5 mr-2"></span>
                    <span><strong>Azure OpenAI Service:</strong> GPT-4 model for intelligent suggestions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-1.5 mr-2"></span>
                    <span><strong>Prompt Engineering:</strong> Optimized prompts for permission context</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-1.5 mr-2"></span>
                    <span><strong>Response Processing:</strong> Parsing and validation of AI responses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-1.5 mr-2"></span>
                    <span><strong>Caching Layer:</strong> Redis caching for AI responses</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">AI Integration Patterns</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-1.5 mr-2"></span>
                    <span><strong>Asynchronous Processing:</strong> Non-blocking AI requests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-1.5 mr-2"></span>
                    <span><strong>Fallback Mechanisms:</strong> Graceful degradation when AI is unavailable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-1.5 mr-2"></span>
                    <span><strong>Rate Limiting:</strong> Controlled access to AI services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-1.5 mr-2"></span>
                    <span><strong>Feedback Loop:</strong> Continuous improvement of AI responses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-yellow-50 border-b border-yellow-200">
            <div className="flex items-center">
              <Server className="h-5 w-5 text-yellow-600 mr-2" />
              <h3 className="text-lg font-medium text-yellow-900">DevOps & Deployment Architecture</h3>
            </div>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">CI/CD Pipeline</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-1.5 mr-2"></span>
                    <span><strong>Azure DevOps:</strong> Source control and pipeline management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-1.5 mr-2"></span>
                    <span><strong>Build Pipelines:</strong> Automated builds and testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-1.5 mr-2"></span>
                    <span><strong>Release Pipelines:</strong> Automated deployments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-1.5 mr-2"></span>
                    <span><strong>Infrastructure as Code:</strong> Azure Resource Manager templates</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">Monitoring & Operations</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-1.5 mr-2"></span>
                    <span><strong>Azure Application Insights:</strong> Application monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-1.5 mr-2"></span>
                    <span><strong>Azure Monitor:</strong> Infrastructure monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-1.5 mr-2"></span>
                    <span><strong>Log Analytics:</strong> Centralized logging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-1.5 mr-2"></span>
                    <span><strong>Azure Alerts:</strong> Proactive notification system</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}