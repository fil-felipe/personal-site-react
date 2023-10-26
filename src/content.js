const dataInput = [
    { language: "eng",
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
                    headerTitle: "Residence",
                    headerContent: "Warsaw (Poland)"
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
                {blockTitle: "Work experience",
                blockInfo: "I was experience mainly in finance departments. However always focused on automatization of tasks using advanced IT skills. Currently I develop my carrier in the programming area where my finance experience can be an asset to understand business background of the applications which I will create and maintain.",
                blockContent: [
                    {
                        contentTitle: "Aion Bank",
                        contentImg: "/aion_bank.png",
                        contentString: "2021 - now",
                        contentArray: ["Credit Risk department.", "Responsible reporting creation and processes automatization", "Create python application for automate credit risk task.", "Create internal data lake structer for data creation based on AutomateNow applicataion.", "Working mainly with SQL, Python"]
                    },
                    {
                        contentTitle: "Coca Cola HSBC",
                        contentImg: "/Coca_cola_hbc_pl.jpg",
                        contentString: "2019 - 2020",
                        contentArray: [
                            "Working in controlling department."
                            , "Business partnering with plant entities as cooperation in cost control and efficiency areas."
                            , "Financial data reporting to the local directors and to the headquarter departments."
                            , "Creation of reports which support all stakeholders with cost control and efficiency monitoring."
                            , "Future production costs planning on regular basis (budgeting, rolling estimates)."
                            , "Capital investments planning and profitability analyse."
                        ]
                    },
                    {
                        contentTitle: "BMW financial Services",
                        contentImg: "/BMW_FS.jpg",
                        contentString: "2016 - 2019",
                        contentArray: [
                            "Working in controlling department."
                            , "Financial data reporting to the local directors and to the headquarter departments."
                            , "Creation of reports which support all stakeholders with products profitability and organization efficiency monitoring."
                            , "Risk controlling and support process of IFRS implementation."
                            , "Planning activities (budgeting, rolling estimates) related to sales volume, risk costs, profit loss figures."
                        ]
                    },
                    {
                        contentTitle: "TNT (Accenture)",
                        contentImg: "/Accenture.png",
                        contentString: "2015 - 2016",
                        contentArray: [
                            "Accounting of intercompany settlements between international company department."
                            , "Accounting of duty customs."
                            , "Working on SAP software."
                        ]
                    },
                    {
                        contentTitle: "Fischer",
                        contentString: "2014 - 2014",
                        contentArray: [
                            "Accounting department."
                            , "Responsible mainly for costs accounting."
                            , "Working on SAP software."
                        ]
                    },
                ]
            },
                {blockTitle: "Education",
                    blockInfo: "School education mainly focused on economy studies with addition of production engineering (mainly food production) scope.",
                    blockContentTitle: "Education history:",
                    blockContent: [
                        {
                            contentTitle: "SGH Warsaw School of Economics",
                            contentImg: "/godlo-SGH-zielone-png.png",
                            contentString: " 2015 - 2017",
                            contentArray: [
                                "Master study"
                                , "Faculty - finance and accounting"
                            ]
                        },
                        {
                            contentTitle: "Fachhochshule Kiel. University of Applied Sciences, Kiel, Niemcy",
                            contentImg: "/Fachhochschule_Kiel.jpg",
                            contentString: "IX 2014 - II 2015",
                            contentArray: [
                                "One semester studied in Germany"
                                , "Faculty: Business Management"
                            ]
                        },
                        {
                            contentTitle: "Cracow University of Economy",
                            contentImg: "/pieczec_rektorska_bordo_pl.jpg",
                            contentString: "2011 - III 2015",
                            contentArray: [
                                "Bachelor of Engineering"
                                , "Faculty - production engineering and management"
                            ]
                        }, 
                        {
                            contentTitle: "Economy High School",
                            contentString: "2007 - 2011",
                            contentArray: [
                                "Theory about economy, accounting, administration and company law fundamentals."
                                ,"Practical knowledge about office software and administration tasks."
                                , "1st prize on national economy competition."
                            ]
                        }
                    ]
                },
                {blockTitle: "Skills",
                    blockInfo: "I focus mainly on IT/Programmic skills which are now main interest and plan for development of future carrier.",
                    blockContent: [
                        {
                            contentTitle: "Python",
                            contentImg: "/python-logo-only.png",
                            contentString: "3 years of work experience + practical courses",
                            contentArray: [
                                "Udemy course “100 Days of Code: The Complete Python Pro Bootcamp for 2023”."
                                , "Practical workshop on DataCamp platform (Data Science, Data Engineering, Data Analyst, Python Programmer)."
                                , "Reports creation with dynamic graphs based on SQL or Non-SQL data source."
                                , "Simple model creation and machine learning skills."
                                , "Building API from scratch based on Flask and Django libraries."
                                , "Ability to create simple pipelines and data engineering based on Python."
                            ]
                        },
                        {
                            contentTitle: "SQL",
                            contentImg: "/google-bigquery6102.jpg",
                            contentString: "3 years of work experience + practical courses",
                            contentArray: [
                                "PostgreSQL i BigQuery practical knowledge."
                                , "Data extraction and manipulation mainly for the reporting purposes."
                                , "Udey course “Google Big query & PostreSQL: Big query for Data Analysis ”."
                            ]
                        },
                        {
                            contentTitle: "Java script",
                            contentImg: "/JavaScript-logo.png",
                            contentString: "1 rok doświadczenia + szkolenia",
                            contentArray: [
                                "Practical knowledge about website creation based on React (This CV is stored on https://filip-adamek.pl/)"
                                , "Practical knowledge about Web Application with Front-end (React) and Back-end (NodeJS) https://to-do-list-web.filip-adamek.pl/"
                                , "Udemy course “The Complete 2023 Web Development Bootcamp”."
                            ]
                        },
                        {
                            contentTitle: "Other IT skills",
                            contentString: "Work experience or practical knowledge",
                            contentArray: [
                                "Git repository experience (Including automatic pipelines, CI-CD and application testing."
                                , "Practical knowledge of application build and maintenance on the Google Cloud"
                                , "Certification from Google: Professional Data Engineer."
                                , "Udemy course “The Ultimate DevOps Bootcamp - 2023”."
                            ]
                        },
                        {
                            contentTitle: "Microsoft and Google Office sotware",
                            contentString: "7 years work experience",
                            contentArray: [
                                "Microsoft Excel and Google spreadsheet. Advanced functions with VBA and AppScript"
                                , "Microsoft Word and Google Docs. Documentation with graphs and table of contents"
                                , "Microsoft Power Point and Google Presentation. Reports automaticaly linked and refreshed based on spreadsheet"
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {language: "pl",
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
                    headerTitle: "Miejsce zamieszkania",
                    headerContent: "Warszawa"
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
                        contentString: " 2015 - 2017",
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
                                "Budowa strony internetowej w React (Strona o mnie - CV) https://filip-adamek.pl/"
                                , "Budowa aplikacji webowej Front-end (React) Back-end (NodeJS) https://to-do-list-web.filip-adamek.pl/"
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