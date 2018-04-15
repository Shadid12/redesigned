import { observable, computed } from 'mobx';

export class PluginStore {
    @observable data = [
        {
          title: 'Google Translation',
          description: "Ant Design, a design language for background applications, is refined by Ant UED Team",
          img: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Translate_logo.max-2800x2800.png"
        },
        {
          title: 'Trello Integration',
          description: "Ant Design, a design language for background applications, is refined by Ant UED Team",
          img: "https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/brand-assets/Logos/0099ec3754bf473d2bbf317204ab6fea/trello-logo-blue.png"
        },
        {
          title: 'Check Summary',
          description: "Ant Design, a design language for background applications, is refined by Ant UED Team",
          img: "https://www.pcmag.com/sm/pcmagus/photo/default/walter-glenn-atlassian-confluence-logo-glenn_q9bs.jpg"
        },
        {
          title: 'Jira and Confluence Integration',
          description: "Ant Design, a design language for background applications, is refined by Ant UED Team",
          img: "https://sdtimes.com/wp-content/uploads/2015/10/1006.sdt-atlassian.jpg"
        },
    ];
    
    @observable filter = "";

    @computed get filteredData() {
        var matchesFilter = new RegExp(this.filter, "i")
        return this.data.filter(d => !this.filter || matchesFilter.test(d.title))
    }
}

export default new PluginStore();