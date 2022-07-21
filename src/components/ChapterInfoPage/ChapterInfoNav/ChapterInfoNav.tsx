import React from 'react'
import {ChapterInfoMenuWrapper, ChapterInfoNavWrapper, ChapterInfoWrapper} from './ChapterInfoNavStyle';
import { Avatar, Tree } from "antd";
import type { DataNode, DirectoryTreeProps } from 'antd/es/tree';


export const ChapterInfoNav:React.FC = () => {
  const { DirectoryTree } = Tree;

  const treeData: DataNode[] = [
    {
      title: 'parent 0',
      key: '0-0',
      children: [
        { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
        { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
      ],
    },
    {
      title: 'parent 1',
      key: '0-1',
      children: [
        { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
        { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
      ],
    },
  ];
  const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
    console.log('Trigger Select', keys, info);
  };

  const onExpand: DirectoryTreeProps['onExpand'] = (keys, info) => {
    console.log('Trigger Expand', keys, info);
  };
  return (
    <ChapterInfoNavWrapper>
      <ChapterInfoWrapper>
        <Avatar src={require('assets/img/class.jpg')} size={120}></Avatar>
        <div className="username">离散数学</div>
      </ChapterInfoWrapper>
      <ChapterInfoMenuWrapper>
        <DirectoryTree
            multiple
            defaultExpandAll
            onSelect={onSelect}
            onExpand={onExpand}
            treeData={treeData}
            />
      </ChapterInfoMenuWrapper>
    </ChapterInfoNavWrapper>
  )
}
