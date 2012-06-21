Ext.define('Nav.view.nav.Card',{
    extend: 'Ext.NavigationView',
    xtype: 'navContainer',
    
    config: {
        autoDestroy: false,
        useTitleForBackButtonText: true,
        navigationBar: {
            items: [
                {
                    xype: 'button',
                    id: 'homeBackButton',
                    text: 'Home',
                    align: 'left',
                    ui: 'back'
                }
            ]
        }
    }
});