<template>
  <div class="app-wrapper">
    <a-table :columns="columns" :data-source="dataSource">
      <template #name="{ text }">
        <a>{{ text }}</a>
      </template>
      <template #customTitle>
        <span>
          <smile-outlined />
          姓名
        </span>
      </template>
      <template #tags="{ text: tags }">
        <span>
          <a-tag
            v-for="tag in tags"
            :key="tag"
            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
      <template #action="{ record }">
        <span>
          <a-button>编辑</a-button>
          <a-button>删除</a-button>
        </span>
      </template>
    </a-table>
  </div>
</template>

<script>
// @ is an alias to /src
import { Button, Table } from "ant-design-vue";
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';

export default {
  name: 'layout',
  components: {
    AButton: Button,
    ATable: Table,
    SmileOutlined,
    DownOutlined
  },
  data() {
    return {
      dataSource: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ],
      columns: [
      {
        dataIndex: 'name',
        key: 'name',
        slots: {
          title: 'customTitle',
          customRender: 'name',
        },
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '标签',
        key: 'tags',
        dataIndex: 'tags',
        slots: {
          customRender: 'tags',
        },
      },
      {
        title: '操作',
        key: 'action',
        slots: {
          customRender: 'action',
        },
      }]
    }
  }
}
</script>
