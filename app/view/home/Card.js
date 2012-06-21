Ext.define('Nav.view.home.Card',{
    extend: 'Ext.List',
    xtype: 'homeList',

    config: {
       title: 'Ê×Ò³',
       itemTpl: '<label>{title}</label>',
       store: {
           fields: ['title'],
           data: [
               { title:'label1' },
               { title: 'label2'}
           ]
       }
    }
});
