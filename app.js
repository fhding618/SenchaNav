Ext.application({
    name: 'Nav',
    views: ['home.Card', 'nav.Card', 'nav.View1', 'nav.View2' ],
    controllers: ['Home', 'Nav'],

    launch: function() {
        Ext.Viewport.add({ xtype: 'homeList' });
    }
});