Ext.define('Nav.controller.Home', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            homeList: 'homeList',
            viewList: 'viewList',
            viewData: 'viewData'
        },
        control: {
            homeList: {
                itemtap: 'tapItem'
            }
        }
    },
    tapItem: function(view,index,target,record){
        var id = record.get('title');
        var navContainer = null;
        var navContainers = Ext.ComponentQuery.query("navContainer");

        if(navContainers.length == 0){
            navContainer = Ext.create('Nav.view.nav.Card');
            Ext.Viewport.add(navContainer);
        }else{
            navContainer = navContainers[0];
        }
        navContainer.setShowAnimation({
            type: 'slide',
            direction: 'left',
            duration:500
        });
        var innerItems = navContainer.getInnerItems();
        if(innerItems.length > 0){
            navContainer.removeInnerAt(0);
        }
        
        if(id == 'label1'){
            if(!this.viewList)
                this.viewList = Ext.widget('viewList');
            navContainer.add(this.viewList);
        }else{
            if(!this.viewData)
                this.viewData = Ext.widget('viewData');
           navContainer.add(this.viewData);
        }
        navContainer.show();
    }
    
});