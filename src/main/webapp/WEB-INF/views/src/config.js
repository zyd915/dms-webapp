/**
 * Created by M on 2014/10/29.
 */
'use strict';

require.config({
    paths:{
        ngApp:"views/app",
        amsRest:"views/service/rest_module",
        EnvModule:"views/env_config",
        ugPagination:"js/ug-ui/ug-pagination",
        ngPermission:"js/libs/angular-permission/angular-permission",
        jqValidate:"js/plugin/jquery-validate/jquery.validate.min",
        messageTip:"js/plugin/jquery-validate/messages_zh",
        ngResource:"js/libs/angular-resource",
        ugValidate:"js/ug-ui/ug-validate",
        ugDialog:"js/ug-ui/ug-dialog",
        jquery:"js/libs/jquery-2.0.2.min"
    },
    map:{
        "*":{
            css:"js/css"
        }
    },
    shim:{
        //jqValidate:{
        //    deps:["jquery"]
        //},
        messageTip:{
            deps:["jqValidate"]
        },
        ugValidate:{
            deps:["jqValidate", "messageTip"]
        },
        amsRest:{
            deps:["ngResource"]
        },
        ngApp:{
            deps:["ugPagination", "EnvModule", "ngPermission", "ugValidate", "amsRest", "ugDialog" ]
        }
    }
});
