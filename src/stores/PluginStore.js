import { observable, computed } from 'mobx';

export class PluginStore {
    @observable data = [
        {
          title: 'Google Translation',
          description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
        },
        {
          title: 'Trello Integration',
          description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
        },
        {
          title: 'Check Summary',
          description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
        },
        {
          title: 'Jira and Confluence Integration',
          description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
        },
    ];
    
    @observable filter = "";

    @computed get filteredData() {
        var matchesFilter = new RegExp(this.filter, "i")
        return this.data.filter(d => !this.filter || matchesFilter.test(d.title))
    }
}

export default new PluginStore();