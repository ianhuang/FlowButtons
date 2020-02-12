({
	doInit : function(component, event, helper) {
        var buttonConfig;
        var flowButton;
        
        try {
            buttonConfig = component.get('v.button1Config');
            if(!$A.util.isEmpty(buttonConfig)){
                flowButton = JSON.parse(buttonConfig);
                component.set('v.flowButton1', flowButton);
                component.set('v.showButton1', true);
            }
            buttonConfig = component.get('v.button2Config');
            if(!$A.util.isEmpty(buttonConfig)){
                flowButton = JSON.parse(buttonConfig);
                component.set('v.flowButton2', flowButton);
                component.set('v.showButton2', true);
            }
            buttonConfig = component.get('v.button3Config');
            if(!$A.util.isEmpty(buttonConfig)){
                flowButton = JSON.parse(buttonConfig);
                component.set('v.flowButton3', flowButton);
                component.set('v.showButton3', true);
            }
            buttonConfig = component.get('v.button4Config');
            if(!$A.util.isEmpty(buttonConfig)){
                flowButton = JSON.parse(buttonConfig);
                component.set('v.flowButton4', flowButton);
                component.set('v.showButton4', true);
            }
            buttonConfig = component.get('v.button5Config');
            if(!$A.util.isEmpty(buttonConfig)){
                flowButton = JSON.parse(buttonConfig);
                component.set('v.flowButton5', flowButton);
                component.set('v.showButton5', true);
            }
            buttonConfig = component.get('v.button6Config');
            if(!$A.util.isEmpty(buttonConfig)){
                flowButton = JSON.parse(buttonConfig);
                component.set('v.flowButton6', flowButton);
                component.set('v.showButton6', true);
            }
            buttonConfig = component.get('v.button7Config');
            if(!$A.util.isEmpty(buttonConfig)){
                flowButton = JSON.parse(buttonConfig);
                component.set('v.flowButton7', flowButton);
                component.set('v.showButton7', true);
            }
            buttonConfig = component.get('v.button8Config');
            if(!$A.util.isEmpty(buttonConfig)){
                flowButton = JSON.parse(buttonConfig);
                component.set('v.flowButton8', flowButton);
                component.set('v.showButton8', true);
            }
            buttonConfig = component.get('v.button9Config');
            if(!$A.util.isEmpty(buttonConfig)){
                flowButton = JSON.parse(buttonConfig);
                component.set('v.flowButton9', flowButton);
                component.set('v.showButton9', true);
            }
            buttonConfig = component.get('v.button10Config');
            if(!$A.util.isEmpty(buttonConfig)){
                flowButton = JSON.parse(buttonConfig);
                component.set('v.flowButton10', flowButton);
                component.set('v.showButton10', true);
            }
        }catch(ex) {
            helper.showError(component, ex);
        }
	},
    
    onClick : function(component, event, helper) {
        var recordId = component.get("v.recordId");
        var buttonId = event.getSource().getLocalId();
        
        var flowButton;
        
        if(buttonId=='button01')
        	flowButton = component.get("v.flowButton1");
        else if(buttonId=='button02')
        	flowButton = component.get("v.flowButton2");
        else if(buttonId=='button03')
        	flowButton = component.get("v.flowButton3");
        else if(buttonId=='button04')
        	flowButton = component.get("v.flowButton4");
        else if(buttonId=='button05')
        	flowButton = component.get("v.flowButton5");
        else if(buttonId=='button06')
        	flowButton = component.get("v.flowButton6");
        else if(buttonId=='button07')
        	flowButton = component.get("v.flowButton7");
        else if(buttonId=='button08')
        	flowButton = component.get("v.flowButton8");
        else if(buttonId=='button09')
        	flowButton = component.get("v.flowButton9");
        else if(buttonId=='button10')
        	flowButton = component.get("v.flowButton10");
        
        helper.runFlowInModal(component, recordId, flowButton);
    },
   
})