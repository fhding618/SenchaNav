Ext.define('Nav.view.nav.View2',{
    extend: 'Ext.DataView',
    xtype: 'viewData',

    config: {
       title: 'DataView',
       fullscreen: true,
       itemTpl: '<div>{content}</div>',
       store: {
           fields: ['content'],
           data: [
               { content: 'This a test!'}
           ]
       }
    }
});
