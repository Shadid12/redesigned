import { observable, computed } from 'mobx';

export class PluginStore {
    @observable data = [
        {
          title: 'Google Translation',
          description: "Translate messages using google's cloud translator",
          img: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Translate_logo.max-2800x2800.png"
        },
        {
            title: 'Cloud Vision',
            description: "What's in that image find out",
            img: "https://cdn-ak.f.st-hatena.com/images/fotolife/r/ryo_abe/20171210/20171210003609.png"
        }
    ];
    
    @observable filter = "";

    @computed get filteredData() {
        var matchesFilter = new RegExp(this.filter, "i")
        return this.data.filter(d => !this.filter || matchesFilter.test(d.title))
    }
}

export default new PluginStore();