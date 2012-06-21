Ext.define('Nav.controller.Nav', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            navContainer: 'navContainer',
            homeBackButton: '#homeBackButton',
            viewList: 'viewList',
            viewData: 'viewData'
        },
        control: {
            navContainer: {
                pop: 'navPop'
            },
            homeBackButton: {
                tap: 'backToHome'
            },
            viewList: {
                itemtap: 'taplist'
            }
        }
    },
    
    navPop: function(){
        if(this.getNavContainer().getActiveItem().xtype == 'viewList'){
            var homeBackButton = Ext.ComponentQuery.query('#homeBackButton');
            homeBackButton[0].show();
        }
    },
   
   taplist: function(){
       if(!this.viewData)
           this.viewData = Ext.widget('viewData');
       this.getNavContainer().push(this.viewData);
       var homeBackButton = Ext.ComponentQuery.query('#homeBackButton');
       homeBackButton[0].hide();
   },
   
   backToHome: function(){
       var navContainer = Ext.ComponentQuery.query("navContainer")[0];
        navContainer.setHideAnimation({
            type:'slideOut',
            direction: 'right',
            duration:500
        });
        navContainer.hide();
   }
});