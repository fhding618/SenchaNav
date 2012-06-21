Ext.define('Nav.view.nav.View1',{
    extend: 'Ext.List',
    xtype: 'viewList',

    config: {
       title: 'ListView',
       itemTpl: '<label>{title}</label>',
       store: {
           fields: ['title'],
           data: [
               { title:'label1' }
           ]
       }
    }
});
