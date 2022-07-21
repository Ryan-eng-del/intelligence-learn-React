import React from 'react'
import { Tree, Button } from 'antd';
import type { DataNode, DirectoryTreeProps } from 'antd/es/tree';
import { ChapterPageWrapper } from './ChapterPageStyle';
import { useNavigate } from 'react-router-dom'

export const ChapterPage: React.FC = () => {
  const navigate = useNavigate()
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
    <>
      <ChapterPageWrapper>
        <Button onClick={()=>navigate("/chapterinfo")}>Click Here To Test Chapter Info Page</Button>
        <DirectoryTree
          multiple
          defaultExpandAll
          onSelect={onSelect}
          onExpand={onExpand}
          treeData={treeData}
          />
      </ChapterPageWrapper>
    </>
  )
}
