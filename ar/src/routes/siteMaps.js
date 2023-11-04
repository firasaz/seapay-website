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
          name: 'بوابة التجار',
          to: '/',
          exact: true,
          active: true
        },
        {
          name: 'خيارات الدفع',
          to: '/',
          exact: true,
          active: true
        },
        {
          name: 'القبول الاكتروني',
          to: '/dashboard/analytics',
          active: true
        },
        {
          name: 'إعادة البيع',
          to: '/dashboard/crm',
          active: true
        },
        {
          name: 'الحسابات المتعددة',
          to: '/dashboard/e-commerce',
          active: true
        },
        {
          name: 'أدوات الـ B2B',
          to: '/dashboard/project-management',
          active: true
        }
      ]
    }
  ]
};

export const solutionsRoutes = {
  label: 'الحلول',
  labelDisable: true,
  children: [
    {
      name: 'خيارات الدفع',
      active: true,
      icon: 'chart-pie',
      children: [
        {
          name: 'المتاجر الكترونية',
          to: '/',
          exact: true,
          active: true
        },
        {
          name: 'المتاجر الفعلية',
          to: '/',
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
          to: '/',
          exact: true,
          active: true
        },
        {
          name: 'التوضيف',
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
