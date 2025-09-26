// Course data
        const courseData = {
            modules: [
                {
                    id: 1,
                    title: "Computer Basics",
                    icon: "fas fa-desktop",
                    color: "calmBlue",
                    completed: false,
                    quizPassed: false,
                    content: {
                        title: "Understanding Your Computer",
                        sections: [
                            {
                                title: "Hardware Components",
                                content: "<p class='font-nunito'>A computer consists of several key hardware components:</p><ul class='list-disc pl-5 mt-2 space-y-1 font-nunito'><li><strong>CPU (Central Processing Unit)</strong> - The brain of the computer</li><li><strong>RAM (Random Access Memory)</strong> - Temporary storage for active programs</li><li><strong>Hard Drive</strong> - Permanent storage for files and programs</li><li><strong>Motherboard</strong> - The main circuit board connecting all components</li></ul>"
                            },
                            {
                                title: "Operating Systems",
                                content: "<p class='font-nunito'>An operating system (OS) is software that manages computer hardware and software resources. Common examples include:</p><ul class='list-disc pl-5 mt-2 space-y-1 font-nunito'><li>Windows</li><li>macOS</li><li>Linux</li><li>Chrome OS</li></ul><p class='mt-3 font-nunito'>The OS provides a user interface and manages files, applications, and hardware.</p>"
                            },
                            {
                                title: "Basic Operations",
                                content: "<p class='font-nunito'>Essential computer operations everyone should know:</p><ul class='list-disc pl-5 mt-2 space-y-1 font-nunito'><li>Turning the computer on and off properly</li><li>Using a mouse and keyboard effectively</li><li>Creating, saving, and organizing files</li><li>Installing and uninstalling software</li></ul>"
                            }
                        ]
                    },
                    quiz: {
                        title: "Computer Basics Quiz",
                        questions: [
                            {
                                question: "What is the main function of the CPU?",
                                options: [
                                    "Store files permanently",
                                    "Process instructions and perform calculations",
                                    "Display images on the screen",
                                    "Connect to the internet"
                                ],
                                correct: 1
                            },
                            {
                                question: "Which of these is NOT an operating system?",
                                options: [
                                    "Windows",
                                    "macOS", 
                                    "Microsoft Word",
                                    "Linux"
                                ],
                                correct: 2
                            },
                            {
                                question: "What should you do before turning off your computer?",
                                options: [
                                    "Close all open programs",
                                    "Unplug the monitor",
                                    "Remove the keyboard",
                                    "Cover it with a cloth"
                                ],
                                correct: 0
                            },
                            {
                                question: "RAM is a type of:",
                                options: [
                                    "Permanent storage",
                                    "Temporary memory",
                                    "Input device",
                                    "Output device"
                                ],
                                correct: 1
                            },
                            {
                                question: "What does 'OS' stand for in computing?",
                                options: [
                                    "Operation Signal",
                                    "Online System", 
                                    "Operating System",
                                    "Optical Storage"
                                ],
                                correct: 2
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    title: "Internet Fundamentals",
                    icon: "fas fa-wifi",
                    color: "pastelPink",
                    completed: false,
                    quizPassed: false,
                    content: {
                        title: "Navigating the Online World",
                        sections: [
                            {
                                title: "What is the Internet?",
                                content: "<p class='font-nunito'>The internet is a global network connecting millions of computers. It allows information sharing and communication across the world.</p><p class='mt-2 font-nunito'>Key concepts:</p><ul class='list-disc pl-5 mt-2 space-y-1 font-nunito'><li><strong>Web Browser</strong> - Software to access websites (Chrome, Firefox, Safari)</li><li><strong>Website</strong> - A collection of web pages</li><li><strong>URL</strong> - The address of a web page</li><li><strong>Search Engine</strong> - Tools to find information online (Google, Bing)</li></ul>"
                            },
                            {
                                title: "Browsing Safely",
                                content: "<p class='font-nunito'>Important safety practices when using the internet:</p><ul class='list-disc pl-5 mt-2 space-y-1 font-nunito'><li>Look for HTTPS in website addresses for secure connections</li><li>Be cautious about sharing personal information</li><li>Use strong, unique passwords for different accounts</li><li>Keep your browser and antivirus software updated</li></ul>"
                            },
                            {
                                title: "Effective Searching",
                                content: "<p class='font-nunito'>Tips for finding information online:</p><ul class='list-disc pl-5 mt-2 space-y-1 font-nunito'><li>Use specific keywords rather than full sentences</li><li>Put phrases in quotes to search for exact matches</li><li>Use the minus sign to exclude words (-news)</li><li>Evaluate sources for credibility</li></ul>"
                            }
                        ]
                    },
                    quiz: {
                        title: "Internet Fundamentals Quiz",
                        questions: [
                            {
                                question: "What does URL stand for?",
                                options: [
                                    "Uniform Resource Locator",
                                    "Universal Reference Link",
                                    "United Resource Library", 
                                    "Uniform Retrieval Location"
                                ],
                                correct: 0
                            },
                            {
                                question: "Which symbol indicates a secure website connection?",
                                options: [
                                    "HTTP",
                                    "HTTPS",
                                    "WWW",
                                    "HTML"
                                ],
                                correct: 1
                            },
                            {
                                question: "What is a web browser?",
                                options: [
                                    "A person who surfs the web",
                                    "Software used to access websites",
                                    "A website design tool",
                                    "An internet service provider"
                                ],
                                correct: 1
                            },
                            {
                                question: "Which of these is NOT a search engine?",
                                options: [
                                    "Google",
                                    "Bing",
                                    "YouTube",
                                    "Safari"
                                ],
                                correct: 3
                            },
                            {
                                question: "What should you do if a website asks for unnecessary personal information?",
                                options: [
                                    "Provide all information requested",
                                    "Close the website and not provide the information",
                                    "Ask friends what they would do",
                                    "Create fake information to enter"
                                ],
                                correct: 1
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    title: "Email Communication",
                    icon: "fas fa-envelope",
                    color: "lavenderPastel",
                    completed: false,
                    quizPassed: false,
                    content: {
                        title: "Mastering Electronic Mail",
                        sections: [
                            {
                                title: "Creating an Email Account",
                                content: "<p class='font-nunito'>Steps to create an email account:</p><ol class='list-decimal pl-5 mt-2 space-y-1 font-nunito'><li>Choose an email provider (Gmail, Outlook, Yahoo)</li><li>Go to the provider's website and click 'Create account'</li><li>Fill in your personal information</li><li>Choose a professional email address</li><li>Create a strong password</li><li>Verify your account through phone or alternate email</li></ol>"
                            },
                            {
                                title: "Writing Effective Emails",
                                content: "<p class='font-nunito'>Tips for professional email communication:</p><ul class='list-disc pl-5 mt-2 space-y-1 font-nunito'><li>Use a clear and descriptive subject line</li><li>Start with a proper greeting (Dear, Hello)</li><li>Keep messages concise and to the point</li><li>Use proper grammar and spelling</li><li>Include a signature with your contact information</li><li>Proofread before sending</li></ul>"
                            },
                            {
                                title: "Email Safety",
                                content: "<p class='font-nunito'>Protecting yourself from email threats:</p><ul class='list-disc pl-5 mt-2 space-y-1 font-nunito'><li>Don't open attachments from unknown senders</li><li>Be wary of emails asking for personal information</li><li>Check sender addresses carefully (phishing attempts)</li><li>Use spam filters</li><li>Log out of your email on shared computers</li></ul>"
                            }
                        ]
                    },
                    quiz: {
                        title: "Email Communication Quiz",
                        questions: [
                            {
                                question: "What is a recommended practice for email passwords?",
                                options: [
                                    "Use the same password for all accounts",
                                    "Use a strong, unique password",
                                    "Use your pet's name",
                                    "Write it down and keep it near your computer"
                                ],
                                correct: 1
                            },
                            {
                                question: "What should you do if you receive a suspicious email?",
                                options: [
                                    "Reply and ask for more information",
                                    "Open any attachments to check them",
                                    "Delete it without opening",
                                    "Forward it to all your contacts"
                                ],
                                correct: 2
                            },
                            {
                                question: "Which part of an email is most important for helping the recipient understand the content?",
                                options: [
                                    "The sender's address",
                                    "The subject line",
                                    "The date sent",
                                    "The signature"
                                ],
                                correct: 1
                            },
                            {
                                question: "What does 'CC' in email stand for?",
                                options: [
                                    "Carbon Copy",
                                    "Computer Communication",
                                    "Copy Content", 
                                    "Customer Care"
                                ],
                                correct: 0
                            },
                            {
                                question: "When is it appropriate to use 'Reply All'?",
                                options: [
                                    "Always, to keep everyone informed",
                                    "When your response is relevant to all recipients",
                                    "When you want to show off your email skills",
                                    "Never, it's considered rude"
                                ],
                                correct: 1
                            }
                        ]
                    }
                },
                {
                    id: 4,
                    title: "Online Safety",
                    icon: "fas fa-shield-alt",
                    color: "deepBlue",
                    completed: false,
                    quizPassed: false,
                    content: {
                        title: "Protecting Yourself Online",
                        sections: [
                            {
                                title: "Password Security",
                                content: "<p class='font-nunito'>Creating and managing secure passwords:</p><ul class='list-disc pl-5 mt-2 space-y-1 font-nunito'><li>Use at least 12 characters with mix of letters, numbers, and symbols</li><li>Avoid using personal information (names, birthdays)</li><li>Don't reuse passwords across different sites</li><li>Consider using a password manager</li><li>Enable two-factor authentication when available</li></ul>"
                            },
                            {
                                title: "Recognizing Online Threats",
                                content: "<p class='font-nunito'>Common online threats to watch for:</p><ul class='list-disc pl-5 mt-2 space-y-1 font-nunito'><li><strong>Phishing</strong> - Fake emails or websites trying to steal information</li><li><strong>Malware</strong> - Malicious software that can harm your computer</li><li><strong>Scams</strong> - Offers that seem too good to be true</li><li><strong>Identity Theft</strong> - Someone using your personal information</li></ul>"
                            },
                            {
                                title: "Privacy Protection",
                                content: "<p class='font-nunito'>Maintaining your privacy online:</p><ul class='list-disc pl-5 mt-2 space-y-1 font-nunito'><li>Adjust privacy settings on social media accounts</li><li>Be careful about what personal information you share</li><li>Use private browsing when using shared computers</li><li>Regularly review app permissions on your devices</li></ul>"
                            }
                        ]
                    },
                    quiz: {
                        title: "Online Safety Quiz",
                        questions: [
                            {
                                question: "What is phishing?",
                                options: [
                                    "A type of fishing game online",
                                    "A method of catching computer viruses",
                                    "A scam to trick you into revealing personal information",
                                    "A way to improve internet speed"
                                ],
                                correct: 2
                            },
                            {
                                question: "Which of these is the strongest password?",
                                options: [
                                    "password123",
                                    "P@ssw0rd!2023",
                                    "12345678",
                                    "johnsmith"
                                ],
                                correct: 1
                            },
                            {
                                question: "What should you do if you suspect your computer has a virus?",
                                options: [
                                    "Ignore it and hope it goes away",
                                    "Run a antivirus scan",
                                    "Delete all your files",
                                    "Share it with friends to warn them"
                                ],
                                correct: 1
                            },
                            {
                                question: "What is two-factor authentication?",
                                options: [
                                    "Using two different passwords",
                                    "A security method requiring two forms of verification",
                                    "Having two email accounts",
                                    "Using two different web browsers"
                                ],
                                correct: 1
                            },
                            {
                                question: "Why is it important to log out of accounts on shared computers?",
                                options: [
                                    "To save electricity",
                                    "To make the computer faster",
                                    "To prevent others from accessing your accounts",
                                    "It's not important if you trust the people around you"
                                ],
                                correct: 2
                            }
                        ]
                    }
                },
                {
                    id: 5,
                    title: "Productivity Tools",
                    icon: "fas fa-file-alt",
                    color: "skyPastel",
                    completed: false,
                    quizPassed: false,
                    content: {
                        title: "Essential Software Applications",
                        sections: [
                            {
                                title: "Word Processing",
                                content: "<p class='font-nunito'>Word processors (like Microsoft Word or Google Docs) help you create documents:</p><ul class='list-disc pl-5 mt-2 space-y-1 font-nunito'><li>Format text (bold, italics, underline)</li><li>Create lists and tables</li><li>Check spelling and grammar</li><li>Insert images and hyperlinks</li><li>Collaborate with others in real-time</li></ul>"
                            },
                            {
                                title: "Spreadsheets",
                                content: "<p class='font-nunito'>Spreadsheets (like Excel or Google Sheets) organize and analyze data:</p><ul class='list-disc pl-5 mt-2 space-y-1 font-nunito'><li>Perform calculations with formulas</li><li>Create charts and graphs</li><li>Sort and filter data</li><li>Use for budgets, lists, and analysis</li></ul>"
                            },
                            {
                                title: "Presentation Software",
                                content: "<p class='font-nunito'>Presentation tools (like PowerPoint or Google Slides) help you create slideshows:</p><ul class='list-disc pl-5 mt-2 space-y-1 font-nunito'><li>Design visually appealing slides</li><li>Add transitions and animations</li><li>Include multimedia (images, video, audio)</li><li>Present information clearly to audiences</li></ul>"
                            }
                        ]
                    },
                    quiz: {
                        title: "Productivity Tools Quiz",
                        questions: [
                            {
                                question: "What is the main purpose of a word processor?",
                                options: [
                                    "To create and edit text documents",
                                    "To perform complex calculations",
                                    "To create digital drawings",
                                    "To manage email accounts"
                                ],
                                correct: 0
                            },
                            {
                                question: "In a spreadsheet, what is a cell?",
                                options: [
                                    "A type of formula",
                                    "The intersection of a row and column",
                                    "A chart or graph",
                                    "A saved file"
                                ],
                                correct: 1
                            },
                            {
                                question: "Which function would you use in a spreadsheet to add up numbers?",
                                options: [
                                    "COUNT",
                                    "AVERAGE",
                                    "SUM",
                                    "MAX"
                                ],
                                correct: 2
                            },
                            {
                                question: "What is the advantage of using cloud-based productivity tools?",
                                options: [
                                    "They are always free",
                                    "They work without internet connection",
                                    "They allow collaboration and access from any device",
                                    "They have more features than desktop software"
                                ],
                                correct: 2
                            },
                            {
                                question: "What should you consider when creating a presentation?",
                                options: [
                                    "Using as many animations as possible",
                                    "Including large blocks of text on each slide",
                                    "Designing slides that are clear and easy to read",
                                    "Using only black and white colors"
                                ],
                                correct: 2
                            }
                        ]
                    }
                }
            ]
        };

        // App state 
let currentState = {
    currentModule: 0,
    currentQuestion: 0,
    userAnswers: [],
    userName: localStorage.getItem('digitalLiteracyUserName') || '',
    courseProgress: JSON.parse(localStorage.getItem('digitalLiteracyCourseProgress')) || {
        modulesCompleted: 0,
        quizzesPassed: 0,
        moduleStatus: Array(5).fill(false),
        quizStatus: Array(5).fill(false)
    }
};

// Initialize the app - REPLACE this function
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners
    document.getElementById('username-form').addEventListener('submit', handleUsernameSubmit);
    document.getElementById('cancel-modal-btn').addEventListener('click', cancelUsernameModal);
    document.getElementById('start-course-btn').addEventListener('click', showUsernameModal);
    document.getElementById('continue-course-btn').addEventListener('click', closeQuizResults);
    document.getElementById('retry-quiz-btn').addEventListener('click', retryQuiz);
    document.getElementById('review-module-btn').addEventListener('click', reviewModule);
    document.getElementById('next-question-btn').addEventListener('click', nextQuestion);
    document.getElementById('download-pdf-btn').addEventListener('click', downloadCertificate);
    document.getElementById('share-certificate-btn').addEventListener('click', shareCertificate);
    document.getElementById('back-to-course-btn').addEventListener('click', backToCourse);
    
    document.getElementById('username-modal').classList.add('hidden');

    // Check if user already has a name and progress
    if (currentState.userName) {
        document.getElementById('user-name').textContent = currentState.userName;
        
        if (currentState.courseProgress.quizzesPassed === 5) {
            showCertificate();
        } else {
            showWelcome();
        }
    } else {
        // New user - show welcome screen first
        showWelcome();
    }
    
    // Update progress display
    updateProgressDisplay();
});

// NEW FUNCTION: Show username modal when Start Course is clicked
function showUsernameModal() {
    document.getElementById('username-modal').classList.remove('hidden');
    document.getElementById('user-name-input').value = '';
    document.getElementById('user-name-input').focus();
}

// UPDATED FUNCTION: Handle username submission
function handleUsernameSubmit(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('user-name-input');
    let userName = nameInput.value.trim();
    
    if (userName === '') {
        alert('Please enter your name to continue.');
        return;
    }
    
    if (userName.length < 2) {
        alert('Please enter a valid name (at least 2 characters).');
        return;
    }
    
    // Save username to state and localStorage
    currentState.userName = userName;
    localStorage.setItem('digitalLiteracyUserName', userName);
    
    // Update the displayed name
    document.getElementById('user-name').textContent = userName;
    
    // Hide modal and start the course
    document.getElementById('username-modal').classList.add('hidden');
    startCourse(); // This will show the course dashboard
}
    

function cancelUsernameModal() {
    document.getElementById('username-modal').classList.add('hidden');
    document.getElementById('user-name-input').value = '';
}

function showError(message) {
    alert(message);
}

// Update progress display
function updateProgressDisplay() {
    const progress = currentState.courseProgress;
    const totalModules = 5;
    const completedPercent = Math.round((progress.quizzesPassed / totalModules) * 100);
    
    // Update progress ring
    const progressRing = document.getElementById('progress-ring');
    if (progressRing) {
        const circumference = 2 * Math.PI * 40;
        const offset = circumference - (completedPercent / 100) * circumference;
        progressRing.style.strokeDashoffset = offset;
    }
    
    // Update progress text
    const progressPercent = document.getElementById('progress-percent');
    if (progressPercent) {
        progressPercent.textContent = `${completedPercent}%`;
    }
    
    const completedModules = document.getElementById('completed-modules');
    if (completedModules) {
        completedModules.textContent = progress.modulesCompleted;
    }
    
    const passedQuizzes = document.getElementById('passed-quizzes');
    if (passedQuizzes) {
        passedQuizzes.textContent = progress.quizzesPassed;
    }
    

    const progressIndicator = document.getElementById('progress-indicator');
    if (progressIndicator) {
        progressIndicator.innerHTML = `<span class="text-white text-sm font-medium font-poppins">${completedPercent}% Complete</span>`;
        
        // Also update the background color based on progress
        if (completedPercent === 0) {
            progressIndicator.className = 'flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full';
        } else if (completedPercent === 100) {
            progressIndicator.className = 'flex items-center bg-green-500 bg-opacity-80 px-3 py-1 rounded-full';
        } else {
            progressIndicator.className = 'flex items-center bg-calmBlue bg-opacity-80 px-3 py-1 rounded-full';
        }
    }
}

        

        // Show welcome screen
        function showWelcome() {
            document.getElementById('welcome-section').classList.remove('hidden');
            document.getElementById('course-dashboard').classList.add('hidden');
            document.getElementById('certificate-section').classList.add('hidden');
            document.getElementById('username-modal').classList.add('hidden');
        }

        // Start the course 
        function startCourse() {
            // If user doesn't have a name yet, show the modal instead
            if (!currentState.userName) {
                showUsernameModal();
                return;
            }
            
            document.getElementById('welcome-section').classList.add('hidden');
            document.getElementById('course-dashboard').classList.remove('hidden');
            document.getElementById('certificate-section').classList.add('hidden');
            document.getElementById('username-modal').classList.add('hidden');
            
            renderModules();
            showModule(0);
        }

        // Render modules list
        function renderModules() {
            const modulesList = document.getElementById('modules-list');
            modulesList.innerHTML = '';
            
            courseData.modules.forEach((module, index) => {
                const moduleElement = document.createElement('div');
                const isCompleted = currentState.courseProgress.moduleStatus[index];
                const quizPassed = currentState.courseProgress.quizStatus[index];
                
                // Determine border color based on module color
                const borderColorClass = `border-${module.color}`;
                const bgColorClass = isCompleted ? 'bg-green-50' : (index === currentState.currentModule ? 'bg-skyPastel' : 'bg-white');
                
                moduleElement.className = `module-card p-4 rounded-xl border-2 cursor-pointer ${borderColorClass} ${bgColorClass}`;
                
                moduleElement.innerHTML = `
                    <div class="flex items-center">
                        <div class="bg-${module.color} bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                            <i class="${module.icon} text-${module.color}"></i>
                        </div>
                        <div class="flex-1">
                            <h3 class="font-medium font-poppins">${module.title}</h3>
                            <div class="flex items-center mt-1">
                                <span class="text-xs ${isCompleted ? 'text-green-600' : 'text-charcoal'} font-nunito">
                                    <i class="fas ${isCompleted ? 'fa-check-circle' : 'fa-book'} mr-1"></i>
                                    ${isCompleted ? 'Completed' : 'Not started'}
                                </span>
                                <span class="mx-2 text-lightGray">|</span>
                                <span class="text-xs ${quizPassed ? 'text-green-600' : 'text-charcoal'} font-nunito">
                                    <i class="fas ${quizPassed ? 'fa-trophy' : 'fa-question-circle'} mr-1"></i>
                                    ${quizPassed ? 'Quiz passed' : 'Quiz pending'}
                                </span>
                            </div>
                        </div>
                    </div>
                `;
                
                moduleElement.addEventListener('click', () => showModule(index));
                modulesList.appendChild(moduleElement);
            });
        }

        // Show a specific module
        function showModule(moduleIndex) {
            currentState.currentModule = moduleIndex;
            const module = courseData.modules[moduleIndex];
            const moduleContent = document.getElementById('module-content');
            
            // Build module content HTML
            let contentHTML = `
                <div class="mb-6">
                    <div class="flex items-center mb-4">
                        <div class="bg-${module.color} bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                            <i class="${module.icon} text-${module.color} text-xl"></i>
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold font-raleway">${module.content.title}</h2>
                            <p class="text-charcoal font-nunito">Module ${module.id} of 5</p>
                        </div>
                    </div>
                    
                    <div class="content-card">
                        <div class="flex items-center">
                            <i class="fas fa-info-circle text-${module.color} mr-2"></i>
                            <span class="font-poppins">Complete all sections and pass the quiz to finish this module</span>
                        </div>
                    </div>
            `;
            
            // Add sections
            module.content.sections.forEach((section, index) => {
                contentHTML += `
                    <div class="mb-6">
                        <h3 class="text-xl font-semibold mb-3 flex items-center font-poppins">
                            <span class="bg-${module.color} text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-nunito">${index + 1}</span>
                            ${section.title}
                        </h3>
                        <div class="content-card">
                            ${section.content}
                        </div>
                    </div>
                `;
            });
            
            // Add action buttons
            const quizPassed = currentState.courseProgress.quizStatus[moduleIndex];
            contentHTML += `
                <div class="flex justify-between mt-8 pt-6 border-t border-lightGray">
                    <button ${moduleIndex === 0 ? 'disabled' : ''} 
                            class="bg-charcoal hover:bg-deepBlue text-white font-medium py-2 px-4 rounded-lg ${moduleIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''} font-poppins"
                            onclick="showModule(${moduleIndex - 1})">
                        <i class="fas fa-arrow-left mr-2"></i>Previous Module
                    </button>
                    
                    <div class="space-x-3">
                        <button class="btn-primary font-medium py-2 px-4"
                                onclick="markModuleCompleted(${moduleIndex})">
                            <i class="fas fa-check-circle mr-2"></i>Mark as Completed
                        </button>
                        
                        <button class="btn-secondary font-medium py-2 px-4"
                                onclick="startQuiz(${moduleIndex})">
                            <i class="fas fa-play-circle mr-2"></i>Take Quiz
                        </button>
                    </div>
                    
                    <button ${moduleIndex === 4 ? 'disabled' : ''} 
                            class="bg-charcoal hover:bg-deepBlue text-white font-medium py-2 px-4 rounded-lg ${moduleIndex === 4 ? 'opacity-50 cursor-not-allowed' : ''} font-poppins"
                            onclick="showModule(${moduleIndex + 1})">
                        Next Module<i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            `;
            
            moduleContent.innerHTML = contentHTML;
            renderModules(); // Update module list to reflect current selection
        }

        // Mark module as completed
        function markModuleCompleted(moduleIndex) {
            if (!currentState.courseProgress.moduleStatus[moduleIndex]) {
                currentState.courseProgress.moduleStatus[moduleIndex] = true;
                currentState.courseProgress.modulesCompleted++;
                saveProgress();
                renderModules();
                updateProgressDisplay();
                
                // Show confirmation
                alert('Module marked as completed! You can now take the quiz.');
            } else {
                alert('This module is already marked as completed.');
            }
        }

        // Start a quiz
        function startQuiz(moduleIndex) {
            if (!currentState.courseProgress.moduleStatus[moduleIndex]) {
                alert('Please complete the module content before taking the quiz.');
                return;
            }
            
            currentState.currentModule = moduleIndex;
            currentState.currentQuestion = 0;
            currentState.userAnswers = [];
            
            const module = courseData.modules[moduleIndex];
            document.getElementById('quiz-title').textContent = module.quiz.title;
            document.getElementById('quiz-description').textContent = `Test your knowledge from the ${module.title} module`;
            
            showQuestion();
            document.getElementById('quiz-modal').classList.remove('hidden');
        }

        // Show the current question
        function showQuestion() {
            const module = courseData.modules[currentState.currentModule];
            const question = module.quiz.questions[currentState.currentQuestion];
            const quizContent = document.getElementById('quiz-content');
            
            let optionsHTML = '';
            question.options.forEach((option, index) => {
                optionsHTML += `
                    <div class="quiz-option p-3 border border-lightGray rounded-lg mb-2 cursor-pointer font-nunito" 
                         onclick="selectAnswer(${index})">
                        <div class="flex items-center">
                            <div class="w-6 h-6 rounded-full border border-lightGray mr-3 flex items-center justify-center">
                                <div id="option-${index}" class="w-3 h-3 rounded-full bg-white"></div>
                            </div>
                            <span>${option}</span>
                        </div>
                    </div>
                `;
            });
            
            quizContent.innerHTML = `
                <h4 class="text-lg font-medium mb-4 font-raleway">${question.question}</h4>
                <div class="space-y-2">
                    ${optionsHTML}
                </div>
            `;
            
            document.getElementById('quiz-progress').textContent = `Question ${currentState.currentQuestion + 1} of ${module.quiz.questions.length}`;
            
            // Update next button text for last question
            const nextButton = document.getElementById('next-question-btn');
            if (currentState.currentQuestion === module.quiz.questions.length - 1) {
                nextButton.textContent = 'Finish Quiz';
            } else {
                nextButton.textContent = 'Next Question';
            }
        }

        // Select an answer
        function selectAnswer(answerIndex) {
            // Reset all options
            for (let i = 0; i < 4; i++) {
                const optionCircle = document.getElementById(`option-${i}`);
                optionCircle.style.backgroundColor = '#fff';
            }
            
            // Highlight selected option
            const selectedOption = document.getElementById(`option-${answerIndex}`);
            selectedOption.style.backgroundColor = '#5DADEC';
            
            // Store the answer
            currentState.userAnswers[currentState.currentQuestion] = answerIndex;
        }

        // Go to next question or finish quiz
        function nextQuestion() {
            const module = courseData.modules[currentState.currentModule];
            
            // Check if an answer was selected
            if (currentState.userAnswers[currentState.currentQuestion] === undefined) {
                alert('Please select an answer before continuing.');
                return;
            }
            
            if (currentState.currentQuestion < module.quiz.questions.length - 1) {
                currentState.currentQuestion++;
                showQuestion();
            } else {
                finishQuiz();
            }
        }

        // Finish the quiz and show results
        function finishQuiz() {
            const module = courseData.modules[currentState.currentModule];
            let correctAnswers = 0;
            
            // Calculate score
            module.quiz.questions.forEach((question, index) => {
                if (currentState.userAnswers[index] === question.correct) {
                    correctAnswers++;
                }
            });
            
            const score = Math.round((correctAnswers / module.quiz.questions.length) * 100);
            const passed = score >= 70;
            
            // Close quiz modal
            document.getElementById('quiz-modal').classList.add('hidden');
            
            // Show results
            if (passed) {
                document.getElementById('quiz-passed').classList.remove('hidden');
                document.getElementById('quiz-failed').classList.add('hidden');
                document.getElementById('quiz-score').textContent = score;
                
                // Update progress if this is the first time passing
                if (!currentState.courseProgress.quizStatus[currentState.currentModule]) {
                    currentState.courseProgress.quizStatus[currentState.currentModule] = true;
                    currentState.courseProgress.quizzesPassed++;
                    saveProgress();
                    updateProgressDisplay();
                    
                    // Check if all quizzes are passed
                    if (currentState.courseProgress.quizzesPassed === 5) {
                        setTimeout(showCertificate, 1500);
                    }
                }
            } else {
                document.getElementById('quiz-passed').classList.add('hidden');
                document.getElementById('quiz-failed').classList.remove('hidden');
                document.getElementById('failed-score').textContent = score;
            }
            
            document.getElementById('quiz-results-modal').classList.remove('hidden');
        }

        // Close quiz results
        function closeQuizResults() {
            document.getElementById('quiz-results-modal').classList.add('hidden');
            showModule(currentState.currentModule);
        }

        // Retry quiz
        function retryQuiz() {
            document.getElementById('quiz-results-modal').classList.add('hidden');
            startQuiz(currentState.currentModule);
        }

        // Review module
        function reviewModule() {
            document.getElementById('quiz-results-modal').classList.add('hidden');
            showModule(currentState.currentModule);
        }

        // Show certificate
        function showCertificate() {
            document.getElementById('welcome-section').classList.add('hidden');
            document.getElementById('course-dashboard').classList.add('hidden');
            document.getElementById('certificate-section').classList.remove('hidden');
            document.getElementById('username-modal').classList.add('hidden');
            
            // Set certificate details with the stored username
            document.getElementById('certificate-name').textContent = currentState.userName;
            document.getElementById('certificate-date').textContent = new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }

        // Back to course from certificate
        function backToCourse() {
            document.getElementById('certificate-section').classList.add('hidden');
            document.getElementById('course-dashboard').classList.remove('hidden');
        }

        // Download certificate as PDF
        function downloadCertificate() {
            const { jsPDF } = window.jspdf;
            const certificate = document.getElementById('certificate-preview');
            
            html2canvas(certificate).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('landscape', 'mm', 'a4');
                const imgWidth = 297; // A4 width in mm
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save('Digital-Literacy-Certificate.pdf');
            });
        }

        // Share certificate
        function shareCertificate() {
            if (navigator.share) {
                navigator.share({
                    title: 'My Digital Literacy Certificate',
                    text: 'I completed the Digital Literacy Mastery Course!',
                    url: window.location.href
                })
                .catch(error => console.log('Error sharing:', error));
            } else {
                alert('Web Share API not supported in your browser. You can download the certificate instead.');
            }
        }

