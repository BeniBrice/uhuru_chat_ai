// Demo data for all AI tools

export const chatMessages = [
  { role: 'user', content: 'What can you help me with today?' },
  { role: 'assistant', content: 'Hello! I\'m your AI assistant. I can help you with a wide variety of tasks including:\n\n• Answering questions on any topic\n• Writing and editing content\n• Brainstorming ideas\n• Explaining complex concepts\n• Code assistance and debugging\n• Creative writing and storytelling\n\nWhat would you like to explore?' },
  { role: 'user', content: 'Can you explain how neural networks work?' },
  { role: 'assistant', content: 'Neural networks are computing systems inspired by biological brains. Here\'s a simplified explanation:\n\n**Structure:**\n- Made of layers of "neurons" (nodes)\n- Input layer receives data\n- Hidden layers process information\n- Output layer produces results\n\n**How they learn:**\n1. Data passes through the network\n2. Each neuron applies weights and activation functions\n3. The network compares output to expected result\n4. "Backpropagation" adjusts weights to improve accuracy\n\nThink of it like learning to catch a ball - you adjust your movements based on where the ball lands!' }
]

export const generatedTextSamples = {
  blog: `# The Future of AI in Everyday Life\n\nArtificial Intelligence is no longer a distant dream – it's woven into the fabric of our daily experiences. From the moment you wake up to personalized news feeds, to the evening when your smart home adjusts the thermostat, AI is quietly enhancing our lives.\n\n## Smart Assistants: Your Digital Companions\n\nVoice assistants have evolved from simple command responders to intuitive companions that understand context, emotion, and intent. They schedule our meetings, answer our questions, and even provide companionship for those who need it.\n\n## Healthcare Revolution\n\nAI is transforming healthcare with early disease detection, personalized treatment plans, and drug discovery acceleration. Machine learning models can now identify patterns in medical images that human eyes might miss.\n\n## The Road Ahead\n\nAs AI continues to advance, we stand at the threshold of unprecedented possibilities. The key lies in developing these technologies responsibly, ensuring they serve humanity's best interests.`,
  email: `Subject: Q4 Project Update - Exciting Progress!\n\nHi Team,\n\nI wanted to share some exciting updates from our Q4 initiatives:\n\n✅ User engagement up 45% month-over-month\n✅ Successfully launched 3 new features\n✅ Customer satisfaction score: 4.8/5\n\nKey highlights:\n- The new AI recommendation engine is performing beyond expectations\n- Mobile app downloads exceeded our target by 20%\n- Partnership discussions with major clients are progressing well\n\nNext steps:\n1. Finalize holiday campaign strategy\n2. Complete beta testing for v2.0\n3. Prepare Q1 roadmap presentation\n\nGreat work everyone! Let's keep this momentum going.\n\nBest regards,\nAI Assistant`,
  story: `The old lighthouse keeper had seen many storms, but none quite like this one. As lightning split the sky and waves crashed against the rocky shore, Elena noticed something impossible – a light, glowing deep beneath the churning waters.\n\n"After forty years," she whispered, pressing her weathered hand against the cold glass, "you've finally come back."\n\nThe stories her grandmother had told her, the ones she'd dismissed as fever dreams and sea madness, they were all true. The underwater city of Meridian was rising.\n\nShe grabbed her rain slicker and headed for the door. Some secrets were worth braving any storm to discover.`
}

export const analysisResults = {
  sentiment: { positive: 72, neutral: 18, negative: 10 },
  keywords: ['artificial intelligence', 'machine learning', 'innovation', 'technology', 'future', 'automation'],
  readability: { score: 72, grade: 'College', fleschKincaid: 12.3 },
  wordCount: 487,
  characterCount: 2834,
  sentences: 32,
  paragraphs: 8
}

export const codeSnippets = {
  python: `import torch\nimport torch.nn as nn\n\nclass NeuralNetwork(nn.Module):\n    def __init__(self, input_size, hidden_size, output_size):\n        super(NeuralNetwork, self).__init__()\n        self.layer1 = nn.Linear(input_size, hidden_size)\n        self.relu = nn.ReLU()\n        self.layer2 = nn.Linear(hidden_size, output_size)\n        self.softmax = nn.Softmax(dim=1)\n    \n    def forward(self, x):\n        x = self.layer1(x)\n        x = self.relu(x)\n        x = self.layer2(x)\n        return self.softmax(x)\n\n# Initialize model\nmodel = NeuralNetwork(784, 128, 10)\nprint(f"Model architecture: {model}")`,
  javascript: `// Async data fetching with error handling\nasync function fetchUserData(userId) {\n  try {\n    const response = await fetch(\n      \`https://api.example.com/users/\${userId}\`\n    );\n    \n    if (!response.ok) {\n      throw new Error(\`HTTP error! status: \${response.status}\`);\n    }\n    \n    const userData = await response.json();\n    \n    return {\n      id: userData.id,\n      name: userData.name,\n      email: userData.email,\n      createdAt: new Date(userData.created_at)\n    };\n  } catch (error) {\n    console.error('Failed to fetch user:', error);\n    throw error;\n  }\n}`,
  typescript: `interface User {\n  id: string;\n  name: string;\n  email: string;\n  role: 'admin' | 'user' | 'guest';\n}\n\ninterface AuthState {\n  user: User | null;\n  isAuthenticated: boolean;\n  loading: boolean;\n}\n\nclass AuthService {\n  private state: AuthState = {\n    user: null,\n    isAuthenticated: false,\n    loading: true\n  };\n\n  async login(email: string, password: string): Promise<User> {\n    const response = await this.api.post('/auth/login', {\n      email,\n      password\n    });\n    \n    this.state = {\n      user: response.data.user,\n      isAuthenticated: true,\n      loading: false\n    };\n    \n    return response.data.user;\n  }\n}`
}

export const nlpResults = {
  entities: [
    { text: 'Apple Inc.', type: 'Organization', confidence: 0.98 },
    { text: 'Tim Cook', type: 'Person', confidence: 0.96 },
    { text: 'Cupertino', type: 'Location', confidence: 0.94 },
    { text: '$3 trillion', type: 'Money', confidence: 0.99 },
    { text: 'January 2024', type: 'Date', confidence: 0.97 }
  ],
  sentiment: 'Positive',
  language: 'English',
  summary: 'Apple Inc., led by CEO Tim Cook, has achieved a historic $3 trillion market valuation. The company continues to innovate in consumer electronics and services from its headquarters in Cupertino.'
}

export const financialData = {
  portfolio: [
    { name: 'Stocks', value: 45000, change: 12.5 },
    { name: 'Bonds', value: 25000, change: 3.2 },
    { name: 'Real Estate', value: 80000, change: 8.7 },
    { name: 'Crypto', value: 15000, change: -5.3 },
    { name: 'Savings', value: 35000, change: 4.5 }
  ],
  monthlyData: [
    { month: 'Jan', income: 8500, expenses: 5200 },
    { month: 'Feb', income: 8700, expenses: 4900 },
    { month: 'Mar', income: 9200, expenses: 5800 },
    { month: 'Apr', income: 8900, expenses: 5100 },
    { month: 'May', income: 9500, expenses: 5400 },
    { month: 'Jun', income: 10200, expenses: 6200 }
  ]
}

export const securityReport = {
  overallScore: 87,
  threats: [
    { severity: 'high', name: 'Outdated SSL Certificate', status: 'resolved' },
    { severity: 'medium', name: 'Missing CSRF Protection', status: 'in_progress' },
    { severity: 'low', name: 'Insecure Cookie Settings', status: 'pending' }
  ],
  scans: [
    { type: 'Vulnerability Scan', date: '2024-01-10', found: 3 },
    { type: 'Malware Detection', date: '2024-01-10', found: 0 },
    { type: 'Network Security', date: '2024-01-09', found: 1 },
    { type: 'Compliance Check', date: '2024-01-08', found: 2 }
  ]
}

export const productRecommendations = [
  {
    id: 1,
    name: 'Smart Pro Headphones',
    price: 299,
    rating: 4.8,
    image: 'https://thumbs.dreamstime.com/b/minimalist-smart-tech-gadget-white-background-sleek-minimalist-smart-device-sits-isolated-clean-white-background-406475254.jpg',
    match: 95
  },
  {
    id: 2,
    name: 'Designer Watch Collection',
    price: 450,
    rating: 4.6,
    image: 'https://static.vecteezy.com/system/resources/previews/015/126/147/large_2x/fashion-lifestyle-concept-mannequins-with-space-for-promotional-advertisements-on-sales-and-podiums-product-show-stand-and-geometric-shape-on-white-background-3d-rendering-photo.jpg',
    match: 88
  }
]

export const adTemplates = [
  { id: 'social', name: 'Social Media Ad', dimensions: '1080x1080' },
  { id: 'banner', name: 'Web Banner', dimensions: '728x90' },
  { id: 'story', name: 'Story Ad', dimensions: '1080x1920' },
  { id: 'video', name: 'Video Ad', dimensions: '1920x1080' }
]

export const contentTemplates = [
  { id: 'landing', name: 'Landing Page', icon: 'Layout' },
  { id: 'email', name: 'Email Campaign', icon: 'Mail' },
  { id: 'social', name: 'Social Post', icon: 'Share2' },
  { id: 'blog', name: 'Blog Article', icon: 'FileText' },
  { id: 'press', name: 'Press Release', icon: 'Newspaper' },
  { id: 'product', name: 'Product Description', icon: 'Package' }
]

export const musicStyles = [
  { id: 'electronic', name: 'Electronic', bpm: 128 },
  { id: 'ambient', name: 'Ambient', bpm: 70 },
  { id: 'hiphop', name: 'Hip Hop', bpm: 95 },
  { id: 'classical', name: 'Classical', bpm: 80 },
  { id: 'jazz', name: 'Jazz', bpm: 110 },
  { id: 'rock', name: 'Rock', bpm: 140 }
]
