export const productsRoutes = {
  label: 'المنتجات',
  labelDisable: true,
  children: [
    {
      name: 'خيارات الدفع',
      active: true,
      icon: 'chart-pie',
      children: [
        {
          name: 'SeaGateway للمدفوعات',
          to: '/sea-gateway',
          exact: true,
          active: true
        },
        {
          name: 'نقاط البيع الذكي',
          to: '/pos-gateway',
          exact: true,
          active: true
        },
        // {
        //   name: 'القبول الاكتروني',
        //   to: '/dashboard/analytics',
        //   active: true
        // },
        // {
        //   name: 'إعادة البيع',
        //   to: '/dashboard/crm',
        //   active: true
        // },
        // {
        //   name: 'الحسابات المتعددة',
        //   to: '/dashboard/e-commerce',
        //   active: true
        // },
        // {
        //   name: 'أدوات الـ B2B',
        //   to: '/dashboard/project-management',
        //   active: true
        // }
      ]
    }
  ]
};

export const solutionsRoutes = {
  label: 'اسعارنا',
  labelDisable: true,
  children: [
    {
      name: 'خيارات الدفع',
      active: true,
      icon: 'chart-pie',
      children: [
        {
          name: 'عملائنا الكرام',
          to: '/prices',
          exact: true,
          active: true
        },
        {
          name: 'عملاء بحر العرب',
          to: '/prices-arabsea',
          exact: true,
          active: true
        },
      ]
    }
  ]
};

export const developersRoutes = {
  label: 'المطورين',
  labelDisable: true,
  children: [
    {
      name: 'خيارات الدفع',
      active: true,
      icon: 'chart-pie',
      children: [
        {
          name: 'الوثائق',
          to: '/',
          exact: true,
          active: true
        },
        {
          name: 'الحساب التجريبي',
          to: '/',
          exact: true,
          active: true
        },
      ]
    }
  ]
};

export const companyRoutes = {
  label: 'الشركة',
  labelDisable: true,
  children: [
    {
      name: 'خيارات الدفع',
      active: true,
      icon: 'chart-pie',
      children: [
        {
          name: 'مهمتنا',
          to: '/',
          exact: true,
          active: true
        },
        {
          name: 'عملائنا',
          to: '/',
          exact: true,
          active: true
        },
        {
          name: 'الفريق القيادي',
          to: '/',
          exact: true,
          active: true
        },
        {
          name: 'مجلس الإدارة',
          to: '/',
          exact: true,
          active: true
        },
        {
          name: 'المركز الإعلامي',
          to: '/',
          exact: true,
          active: true
        },
        {
          name: 'تواصل معنا',
          to: '/contact-us',
          exact: true,
          active: true
        },
        {
          name: 'التوظيف',
          to: '/',
          exact: true,
          active: true
        },
      ]
    }
  ]
};


export default [
  productsRoutes,
  solutionsRoutes,
  developersRoutes,
  companyRoutes
];
