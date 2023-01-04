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
                            contentArray: ["Theory about economy, accounting, administration and company law fundamentals.","Practical knowledge about office software and administration tasks.", "1st prize on national economy competition."]
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
                    blockTitle: "Test block single",
                    blockContent: "test infor about such block"
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
                }
            ]
        }
    }
]

export default dataInput;