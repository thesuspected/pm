import EventSystem from "../core/eventsystem";
import BaseBind from "../core/basebind";
import AtomDataLoader from "../core/atomdataloader";
import Settings from "../core/settings";
import {extend, uid} from "../webix/helpers";
import {proto, ui} from "../ui/core";


const DataRecord = proto({
    name: "DataRecord",
    isVisible: function () {
        return true;
    },
    $init: function (config) {
        this.data = config || {};
        var id = (config && config.id) ? config.id : uid();
        this._settings = {id: id};
        ui.views[id] = this;
    },
    getValues: function () {
        return this.data;
    },
    setValues: function (data, update) {
        this.data = update ? extend(this.data, data, true) : data;
        this.callEvent("onChange", [data]);
    },
    refresh: function () {
        this.callEvent("onBindRequest");
    }
}, EventSystem, BaseBind, AtomDataLoader, Settings);


export default DataRecord;