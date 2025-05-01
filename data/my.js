import MyLifeVue from "../components/MyLife/MyLife.vue";
import MyRelationVue from "../components/MyRelation/MyRelation.vue";
import MySpaceVue from "../components/MySpace/MySpace.vue";

export const myTabs = [{
			name: '空间',
			key: 'space',
			component: MySpaceVue
		},
		{
			name: '动态',
			key: 'life',
			component: MyLifeVue
		},
		{
			name: '关系',
			key: 'relation',
			component: MyRelationVue
		}
	]