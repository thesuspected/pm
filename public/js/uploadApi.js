export let uploadApi = {
    id:"uploadAPI",
    view:"uploader",
    upload:"/upload",
    on:{
        onBeforeFileAdd:function(item){
            let type = item.type.toLowerCase();
            if (type != "jpg" && type != "png" && type != "jpeg"){
                webix.message("Только файлы формата: PNG,JPG");
                return false;
            }
        },
        onFileUpload:function(item){
            webix.alert("Файл загружен");
        },
        onFileUploadError:function(item){
            webix.alert("Ошибка загрузки файла");
        }
    },
    apiOnly:true
};