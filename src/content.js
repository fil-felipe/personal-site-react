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
                    headerContent: "04-05-1991"
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
                    blockInfo: "My Eduction journey was very interesting...",
                    blockContentTitle: "Education history:",
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
                        },
                        {
                            contentTitle: "Erasmus programm",
                            contentString: "2011 - 2014",
                            contentArray: ["One semester studied in Germany", "Kiel University of Applied Sciences"]
                        },
                        {
                            contentTitle: "Master study",
                            contentString: "2015 - 2016",
                            contentArray: ["Study realized in SGH Warsaw School of Economics", "Faculty - finance and accounting"]
                        }
                    ]
                },
                {
                    blockTitle: "Work experience",
                    blockContent: [
                        {
                            contentTitle: "Fischer",
                            contentString: "2007 - 2011",
                            contentArray: ["Accounting department.", "Responsible mainly for costs accounting.", "Working on SAP software."]
                        },
                        {
                            contentTitle: "TNT (Accenture)",
                            contentString: "2011 - 2014",
                            contentArray: ["Accounting department.", "Responsible mainly for intercompany costs accounting.", "Working on SAP software."]
                        },
                        {
                            contentTitle: "BMW financial Services",
                            contentString: "2014 - 2019",
                            contentArray: ["Controlling department.", "Responsible for management reports creation.", "Working mainly on MS office software."]
                        },
                        {
                            contentTitle: "Coca Cola HSBC",
                            contentString: "2019 - 2020",
                            contentArray: ["Controlling department.", "Responsible for production costs controlling.", "Working mainly on MS office and SAP software."]
                        },
                        {
                            contentTitle: "Aion Bank",
                            contentString: "2021 - now",
                            contentArray: ["Credit Risk department.", "Responsible reporting creation and processes automatization", "Create python application for automate credit risk task.", "Create internal data lake structer for data creation based on AutomateNow applicataion.", "Working mainly with SQL, Python"]
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
                    headerContent: "04-05-1991"
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
                    headerTitle: "Email:",
                    headerContent: "filip.adamek@outlook.com"
                },
            ],
            mainData: [
                { blockTitle: "Doświadczenie zawodowe",
                    blockContent: [
                        {
                            contentTitle: "Aion Bank",
                            contentImg: "https://play-lh.googleusercontent.com/vb5z6VAiaQX0ik4yvTOFVpvQVjj7C9JXu8Q1HUZ8yYjpcDWpPg1Qjl5HbosHpdoulB0",
                            contentString: "2021 - now",
                            contentArray: [
                                "Dział ryzyka kredytowego"
                                , "Odpowiedialny za raportowanie i automatyzację procesów"
                                , "Budowa automatycznego procesu generowania danych na potrzeby raportowe (Zasilanie danych w chmurze Google Cloud na bazie skryptów w python i bash zautomatyzowanych za pomocą aplikacji “AutomateNow”)"
                                , "Budowa dwóch aplikacji python Flask (mikroserwisy służące głównie w procesie analizy kredytowej nowych klientów obejmujące szereg analiz potrzebnych do oceny wiarygodności klienta)"
                                , "Automatyzacja procesów windykacyjnych wraz z procesem sprzedaży wierzytelności do firm zewnętrznych"
                                , "Praca oparta o zadania w aplikacji Jira"
                                , "Budowa i utrzymanie aplikacji Python w oparciu o repozytoria Git (CI-CD), Docker, Kubernetes Google"
                            ]
                        },
                        {
                            contentTitle: "Coca Cola HSBC",
                            contentImg: "https://grubber.gpcdn.pl/companies/5845906/employer-profile-logos/ee4d0000-5df0-0015-7187-08db3a61ea88.jpg",
                            contentString: "2019 - 2020",
                            contentArray: [
                                "Praca w dziale kontrolingu."
                                , "Współpraca z fabrykami w zakresie kontroli kosztów i efektywności funkcjonowania."
                                , "Tworzenie raportów monitorujących koszty produkcji, efektywność organizacji."
                                , "Kontrolowanie i planowanie kosztów produkcji"
                                , "Kontrolowanie oraz planowanie wydatków inwestycyjnych oraz analiza ich rentowności"
                            ]
                        },
                        {
                            contentTitle: "BMW financial Services",
                            contentImg: "https://logos.gpcdn.pl/loga-firm/20130870/2c580000-43a8-f403-ae63-08d8d189cf30_280x280.jpg",
                            contentString: "2014 - 2019",
                            contentArray: [
                                "Praca w dziale kontrolingu."
                                , "Raportowanie danych finansowych do lokalnego zarządu oraz do centrali."
                                , "Tworzenie raportów monitorujących rentowność produktów, efektywność organizacji."
                                , "Kontroling ryzyka i wsparcie podczas implementacji międzynarodowych standardów  sprawozdawczości finansowej"
                            ]
                        },
                        {
                            contentTitle: "TNT (Accenture)",
                            contentImg: "https://uw.esn.pl/sites/default/files/partners/images/1280px-accenture.svg_.png",
                            contentString: "2011 - 2014",
                            contentArray: [
                                "Dział księgowości."
                                , "Księgowanie rozliczeń wewnętrznych pomiędzy oddziałami międzynarodowej firmy spedycyjnej."
                                , "Księgowanie obciążeń celnych."
                            ]
                        },
                        {
                            contentTitle: "Fischer",
                            contentImg: "https://www.fischer-international.com/-/media/system/user-defined/og-images/fischer-og-image.png",
                            contentString: "2007 - 2011",
                            contentArray: [
                                "Dział księgowości."
                                , "Księgowanie kosztów, przyjęć materiałowych, wyciągów bankowych."
                                , "Praca z programem SAP."
                            ]
                        }
                    ]
                },
                { blockTitle: "Wykształcenie",
                blockContent: [
                    {
                        contentTitle: "Szkoła Główna Handlowa w Warszawie",
                        contentImg: "https://www.sgh.waw.pl/sites/sgh.waw.pl/files/2021-06/godlo-SGH-zielone-png.png",
                        contentString: " 2015 - 2016",
                        contentArray: [
                            "Poziom wykształcenia: magister"
                            , "Kierunek: finanse i rachunkowość"
                        ]
                    },
                    {
                        contentTitle: "Fachhochshule Kiel. University of Applied Sciences, Kiel, Niemcy",
                        contentImg: "https://benefit4regions.eu/media/zoo/images/Fachhochschule_Kiel_49096275eb4feddffad79ffa03c86585.jpg",
                        contentString: "IX 2014 - II 2015",
                        contentArray: [
                            "Program wymiany studenckiej"
                            , "Kierunek: Business Management"
                        ]
                    },
                    {
                        contentTitle: "Uniwersytet Ekonomiczny w Krakowie",
                        contentImg: "https://sg-cdn.uek.krakow.pl/thumbnail/article_full/page/c68033f8-cc4d-43e6-b2f6-da3755493b24/pl/pieczec_rektorska_bordo_pl.jpg",
                        contentString: "2011 - III 2015",
                        contentArray: [
                            "Poziom wykształcenia: inżynier"
                            , "Kierunek: zarządzanie i inżynieria produkcji"
                        ]
                    }, 
                    {
                        contentTitle: "Technikum Ekonomiczno-handlowe",
                        contentImg: "https://www.sp162.pl/wp-content/uploads/2021/03/Zaproszenie.logo_.jpg",
                        contentString: "2007 - 2011",
                        contentArray: [
                            "Podstawy ekonomii, finansów i rachnunkowości"
                            ,"Praktyczne doświadczenie pracy w administracji."
                            , "Zwycięstwo w ogólnopolskim konkursie wiedzy o ekonomii."
                        ]
                    }
                ]
            },
                { blockTitle: "Umiejętności",
                    blockContent: [
                        {
                            contentTitle: "Python",
                            contentImg: "/python-logo-only.png",
                            contentString: "2 lata doświadczenia zawodowego + szkolenia",
                            contentArray: [
                                "Praktyczne szkolenie Python “100 Days of Code: The Complete Python Pro Bootcamp for 2023” - realizowane na platformie Udemy"
                                , "Interaktywne warsztaty Python (Data Science, Data Engineering, Data Analyst, Python Programmer) - platforma DataCamp"
                                , "Tworzenie raportów wykorzystujących dynamiczne wykresy oraz bazujących na bazach danych (SQL, noSQL)"
                                , "Podstawowe tworzenie modeli oraz machine learning"
                                , "Tworzenie API przy użyciu pakietów Flask oraz Django"
                                , "Tworzenie podstawowych struktur danych i automatyczne zasianie baz."
                            ]
                        },
                        {
                            contentTitle: "SQL",
                            contentImg: "https://logowik.com/content/uploads/images/google-bigquery6102.jpg",
                            contentString: "3 lata doświadczenia zawodowego + szkolenia",
                            contentArray: [
                                "Doświadczenie w PostgreSQL i BigQuery"
                                , "Wyciąganie danych z baz oraz zasianie baz danych głównie na potrzeby raportowania"
                                , "Praktyczne szkolenie Python “Google Big query & PostreSQL: Big query for Data Analysis ” - realizowane na platformie Udemy"
                            ]
                        },
                        {
                            contentTitle: "Java script",
                            contentImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
                            contentString: "1 rok doświadczenia + szkolenia",
                            contentArray: [
                                "Budowa aplikacji Front-end (React) https://filip-adamek.pl/"
                                , "Budowa aplikacji Back-end (NodeJS)"
                                , "Praktyczne szkolenie z budowania aplikacji webowych “The Complete 2023 Web Development Bootcamp” - realizowane na platformie Udemy"
                            ]
                        },
                        {
                            contentTitle: "Inne narzędzia IT",
                            contentString: "Doświadczenie zawodowe lub realizowane poprzez prywatne projekty",
                            contentArray: [
                                "Znajomość obsługi repozytorium git (tworzenie automatycznych pipeline CI-CD wraz z testowaniem aplikacji python)"
                                , "Umiejętność wgrywania aplikacji na chmurę google (automatyczne wgrywanie aplikacji z repozytorium"
                                , "Praktyczne szkolenie z budowania aplikacji “The Ultimate DevOps Bootcamp - 2023” - realizowane na platformie Udemy"
                            ]
                        },
                        {
                            contentTitle: "Microsoft and Google Office sotware",
                            contentString: "7 lat doświadczenia zawodowego",
                            contentArray: [
                                "Microsoft Excel, Google spreadsheet. Znajomość zaawansowanych funkcji + obsługa VBA (AppScript)"
                                , "Microsoft Word, Google Docs. Tworzenie dokumentacji z wykresami bazującymi na plikach oraz z aktywnym spisem treści"
                                , "Microsoft Power Point, Google Presentation. Tworzenie raportów z automatycznie odświeżanymi treściami na bazie innych plików (np. arkuszy danych)"
                            ]
                        }
                    ]
                }
            ]
        }
    }
]

export default dataInput;