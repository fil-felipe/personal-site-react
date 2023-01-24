const dataInput = [
    {
        language: "eng",
        content: {
            headerData: [
                {
                    headerTitle: "Name",
                    headerContent: "Filip Adamek"
                },
                {
                    headerTitle: "Birthdate",
                    headerContent: "04-05-1991k"
                },
                {
                    headerTitle: "Birthplace",
                    headerContent: "Cracow (Poland)"
                },
                {
                    headerTitle: "Phone",
                    headerContent: "+48 512-737-700"
                },
                {
                    headerTitle: "Email",
                    headerContent: "filip.adamek@outlook.com"
                },
            ],
            mainData: [
                {
                    blockTitle: "Education",
                    blockContent: [
                        {
                            contentTitle: "High School",
                            contentString: "2007 - 2011",
                            contentArray: ["School profile - economy", "Theory about economy, accounting, administration and company law fundamentals.","Practical knowledge about office software and administration tasks.", "1st prize on national economy competition."]
                        },
                        {
                            contentTitle: "Bachelor Study",
                            contentString: "2011 - 2014",
                            contentArray: ["Study realized in Cracow University of Economy", "Faculty - production engineering and management"]
                        }
                    ]
                },
                {
                    blockTitle: "Work experience",
                    blockContent: [
                        {
                            contentTitle: "Fischer",
                            contentString: "2007 - 2011"
                        },
                        {
                            contentTitle: "TNT (Accenture)",
                            contentString: "2011 - 2014"
                        },
                        {
                            contentTitle: "BMW financial Services",
                            contentString: "2014 - 2018"
                        }
                    ]
                },
                {
                    blockTitle: "Skills",
                    blockContent: [
                        {
                            contentTitle: "Microsoft and Google Office sotware",
                            contentString: "7 years work experience",
                            contentArray: ["Microsoft Excel and Google spreadsheet. Advanced functions with VBA and AppScript", "Microsoft Word and Google Docs. Documentation with graphs and table of contents", "Microsoft Power Point and Google Presentation. Reports automaticaly linked and refreshed based on spreadsheet"]
                        },
                        {
                            contentTitle: "SQL",
                            contentString: "3 years work experience",
                            contentArray: ["PostgreSQL and BigQuery experience", "Data extraction and creation mainly for reporting purposes", "Automatization of tasks based on procedures and other tools (for example AutomateNow)"]
                        },
                        {
                            contentTitle: "Python",
                            contentString: "2 years work experience + online practical courses on DataCamp and Udemy",
                            contentArray: ["Reports creation", "Basic modeling and machine learning", "API creation based on Flask or Django", "Basic data enignering skills with creation of data pipeline.","Example of skills: http//www.google.pl Here will be Python GUI"]
                        },
                        {
                            contentTitle: "Java script",
                            contentString: "1 year experience + online practical course on Udemy",
                            contentArray: ["Front end creation on React", "Backend creation based on express", "This website as a proof of knowledge", "Example of skills: http//www.google.pl Here will be Python GUI"]
                        }
                    ]
                }
            ]
        }
    },
    {
        language: "pl",
        content: {
            headerData: [
                {
                    headerTitle: "Imię",
                    headerContent: "Filip Adamek"
                },
                {
                    headerTitle: "Data urodzenia",
                    headerContent: "04-05-1991k"
                },
                {
                    headerTitle: "Miejsce urodzenia",
                    headerContent: "Kraków"
                },
                {
                    headerTitle: "Telefon",
                    headerContent: "+48 512-737-700"
                },
                {
                    headerTitle: "Email",
                    headerContent: "filip.adamek@outlook.com"
                },
            ],
            mainData: [
                {
                    blockTitle: "Wykształcenie",
                    blockContent: [
                        {
                            contentTitle: "Technikum Ekonomiczno-handlowe",
                            contentString: "2007 - 2011",
                            contentArray: ["Podstawy ekonomii, finansów i rachnunkowości","Praktyczne doświadczenie pracy w administracji.", "Zwycięstwo w ogólnopolskim konkursie wiedzy o ekonomii."]
                        },
                        {
                            contentTitle: "Studia inżynierskie",
                            contentString: "2011 - 2014"
                        }
                    ]
                },
                {
                    blockTitle: "Doświadczenie zawodowe",
                    blockContent: [
                        {
                            contentTitle: "Fischer",
                            contentString: "2007 - 2011"
                        },
                        {
                            contentTitle: "TNT (Accenture)",
                            contentString: "2011 - 2014"
                        },
                        {
                            contentTitle: "BMW financial Services",
                            contentString: "2014 - 2018"
                        }
                    ]
                },
                {
                    blockTitle: "Umiejętności",
                    blockContent: [
                        {
                            contentTitle: "Microsoft and Google Office sotware",
                            contentString: "7 lat doświadczenia zawodowego",
                            contentArray: ["Microsoft Excel, Google spreadsheet. Znajomość zaawansowanych funkcji + obsługa VBA (AppScript)", "Microsoft Word, Google Docs. Tworzenie dokumentacji z wykresami bazującymi na plikach oraz z aktywnym spisem treści", "Microsoft Power Point, Google Presentation. Tworzenie raportów z automatycznie odświeżanymi treściami na bazie innych plików (np. arkuszy danych)"]
                        },
                        {
                            contentTitle: "SQL",
                            contentString: "3 lata doświadczenia zawodowego + szkolenie na platformie Udemy",
                            contentArray: ["Doświadczenie w PostgreSQL i BigQuery", "Wyciąganie danych z baz oraz zasianie baz danych głównie na potrzeby raportowania", "Automatyzacja procesu zasilania i przetwarzania danych za pomocą procedur w oparciu o inne narzędzia (np. AutomateNow)"]
                        },
                        {
                            contentTitle: "Python",
                            contentString: "2 lata doświadczenia zawodowego + szkolenia teoretyczne i praktyczne na platformie DataCamp oraz Udemy",
                            contentArray: ["Tworzenie raportów wykorzystujących dynamiczne wykresy oraz bazujących na bazach danych (SQL, noSQL)", "Podstawowe tworzenie modeli oraz machine learning", "Tworzenie API przy użyciu pakietów Flask oraz Django", "Tworzenie podstawowych struktur danych i automatyczne zasianie baz.","Przykład umiejętności: http//www.google.pl tutaj będzie Python GUI"]
                        },
                        {
                            contentTitle: "Java script",
                            contentString: "1 rok doświadczenia + szkolenia teoretyczne i praktyczne na platformie Udemy",
                            contentArray: ["Aplikacja webowa stwrzona w React", "Aplikacja Backend stworzona na bazie paczki express", "Ta strona została stworzona w React", "Inne przykłady: http//www.google.pl tutaj będzie GUI"]
                        }
                    ]
                }
            ]
        }
    }
]

export default dataInput;