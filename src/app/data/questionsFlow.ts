export const questionsFlow = [
    {
        question: "What would you like help with today?",
        options: [
            { 
                label: "Better sleep", 
                followUp: [
                    {
                        question: "What do you struggle with the most when trying to sleep?",
                        options: [
                            { 
                                label: "Falling asleep", 
                                followUp: [
                                    { 
                                        question: "Do you prefer guided sleep meditations or calming sounds?",
                                        options: [
                                            { label: "Guided meditations" },
                                            { label: "Calming sounds (e.g., rain, ocean, wind)" }
                                        ]
                                    }
                                ]
                            },
                            { label: "Staying asleep" },
                            { label: "Waking up too early" },
                            { label: "Having an overactive mind" }
                        ]
                    }
                ]
            },
            { 
                label: "Relaxation", 
                followUp: [
                    {
                        question: "What helps you relax the most?",
                        options: [
                            { 
                                label: "Deep breathing", 
                                followUp: [
                                    { 
                                        question: "What other methods do you use for relaxation?",
                                        options: [
                                            { label: "Stretching" },
                                            { label: "Aromatherapy" },
                                            { label: "Visualization" }
                                        ]
                                    }
                                ]
                            },
                            { label: "Listening to calm music" },
                            { label: "Meditation" },
                            { label: "Nature sounds" }
                        ]
                    }
                ]
            },
            { 
                label: "Focus", 
                followUp: [
                    {
                        question: "When do you need to focus the most?",
                        options: [
                            { label: "Studying or working" },
                            { label: "When multitasking" },
                            { label: "During long meetings or calls" },
                            { label: "In a noisy environment" }
                        ]
                    },
                    {
                        question: "What distractions do you face when trying to focus?",
                        options: [
                            { label: "Noise" },
                            { label: "Social media" },
                            { label: "Tiredness" },
                            { label: "Overthinking" }
                        ]
                    }
                ]
            },
            { 
                label: "Stress relief", 
                followUp: [
                    {
                        question: "What causes you the most stress?",
                        options: [
                            { label: "Work deadlines" },
                            { label: "Personal life pressures" },
                            { label: "Financial concerns" },
                            { label: "Social situations" }
                        ]
                    },
                    {
                        question: "What type of stress relief do you usually look for?",
                        options: [
                            { label: "Physical activity" },
                            { label: "Breathing exercises" },
                            { label: "Talking to someone" },
                            { label: "Listening to music" }
                        ]
                    }
                ]
            },
            { 
                label: "Mental well-being", 
                followUp: [
                    {
                        question: "What area of mental well-being would you like to focus on?",
                        options: [
                            { label: "Anxiety" },
                            { label: "Self-esteem" },
                            { label: "Emotional balance" },
                            { label: "General mindfulness" }
                        ]
                    },
                    {
                        question: "Which of the following would help improve your mental well-being?",
                        options: [
                            { label: "Journaling" },
                            { label: "Mindfulness meditation" },
                            { label: "Exercise" },
                            { label: "Therapy or counseling" }
                        ]
                    }
                ]
            }
        ]
    }
];
