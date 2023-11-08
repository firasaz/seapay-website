import dashboardImage from 'assets/img/generic/dashboard.png';

export const pages = [
{
    'landing': {
        'is_navbar_enabled': 'true',
        'is_footer_enabled': 'true',
        'components': [
            {
                'Hero': {
                    'props': {
                        'title':'اقبل الدفع بواسطة' ,
                        'description':'بوابة الدفع - تقارير متكاملة - أدوات ربط مع SDK - الحماية من الاحتيال و غسيل الاموال - ادارة الافرقة - حسابات متعددة - عمليات إعادة البيع - الدفع باستخدام الرابط و أكثر من 30 خدمة اخرى.' ,
                        'msg':'طور أعمالك و متاجرك بواسطة خيارت دفع متنوعة , تحت مضلة واحدة متكاملة , اقبل الدفع محليا و خليجيا و عاليما',
                        'btnText':'ابدء تجربة فريدة من نوعها مع SeaPay',
                        'dashboardImage': dashboardImage,
                        'span':'true'
                    }
                }
            },
            {
                'Section': {
                    'props': {
                        'title':'اقبل الدفع بواسطة' ,
                        'description':'بوابة الدفع - تقارير متكاملة - أدوات ربط مع SDK - الحماية من الاحتيال و غسيل الاموال - ادارة الافرقة - حسابات متعددة - عمليات إعادة البيع - الدفع باستخدام الرابط و أكثر من 30 خدمة اخرى.' ,
                        'msg':'طور أعمالك و متاجرك بواسطة خيارت دفع متنوعة , تحت مضلة واحدة متكاملة , اقبل الدفع محليا و خليجيا و عاليما',
                        'btnText':'ابدء تجربة فريدة من نوعها مع SeaPay',
                        'dashboardImage': dashboardImage,
                        'span':'true'
                    },
                    'cildren': {
                        'h1': {
                            'attributes': {
                                'className':"fs-2 fs-sm-4 fs-md-5", 
                                'style':{ fontWeight: "bolder" }
                            }
                        },
                        'div': {
                            'attributes': { 
                                'style': { paddingTop: '30px' }
                            },
                            'children': [{
                                'div': {
                                    'attributes': {
                                        'className': 'row',
                                        'children': [{
                                            
                                        }]
                                    }
                                },
                                'div': {}
                            }]
                        }
                    }

                }
            }
        ]
    }
},
{
    'prices': {
        'is_navbar_enabled': 'true',
        'is_footer_enabled': 'true',
        'components': [
            {
                'fragment': {
                    'title':'prices fragment title',
                    'description': 'prices fragment description'
                }
            }
        ]
    }
}
]