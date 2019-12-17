export let uploadApi = {
    id:"uploadAPI",
    view:"uploader",
    upload:"Сделать POST запрос в бэк",
    on:{
        onBeforeFileAdd:function(item){
            let type = item.type.toLowerCase();
            if (type != "jpg" && type != "png" && type != "jpeg"){
                webix.message("Только файлы формата: PNG,JPG");
                return false;
            }
        },
        onFileUpload:function(item){

        },
        onFileUploadError:function(item){
            webix.alert("Ошибка загрузки файла");
        }
    },
    apiOnly:true
};