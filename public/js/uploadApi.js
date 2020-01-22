export let uploadApi = {
    id:"uploadAPI",
    view:"uploader",
    autosend: true,
    upload:"/upload",
    datatype: "multipart/form-data",
    on:{
        onBeforeFileAdd:function(item){
            let type = item.type.toLowerCase();
            if (type != "jpg" && type != "png" && type != "jpeg"){
                webix.message("Только файлы формата: PNG,JPG");
                return false;
            }
        },
        onAfterFileAdd:function(item){
            console.log(item);
        },
        onFileUpload:function(item){
            console.log(item);
            webix.alert("Файл загружен");
        },
        onFileUploadError:function(item){
            webix.alert("Ошибка загрузки файла");
        },
        onUploadComplete:function (item) {
            webix.alert("Успех");
        }
    },
    apiOnly:true
};