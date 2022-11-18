import React, { memo } from 'react'
import { Button, Input } from 'antd'
import { stopPropagation } from 'util/stopPropagation'
import { debounce } from 'util/debounece'
import { IChapterReducerAction } from '../../../../../reducer/ChaperStudyTree/type/type'

const ChapterNodeRenameStatus: React.FC<{
  dispatchChapter: React.Dispatch<IChapterReducerAction>
  confirmRename: any
  cancelRename: any
  value: string
}> = ({ dispatchChapter, confirmRename, cancelRename, value }) => {
  // debounce用来阻止，多次type造成setUpdaterFunction连续调用，导致组件多次渲染更新
  const debounceChange = debounce(
    (e: any) => {
      dispatchChapter({ type: 'setCurInputValue', curInputValue: e.target.value })
    },
    300,
    true
  )
  return (
    <div style={{ display: 'flex' }}>
      <Input
        autoFocus
        onChange={(e) => debounceChange(e)}
        style={{ marginRight: '12px' }}
        defaultValue={value}
        onClick={(e) => e.stopPropagation()}
      />
      <Button type={'primary'} onClick={(e) => stopPropagation(e, confirmRename)} style={{ marginRight: '15px' }}>
        √
      </Button>
      <Button type={'primary'} danger onClick={(e) => stopPropagation(e, cancelRename)}>
        x
      </Button>
    </div>
  )
}
export default memo(ChapterNodeRenameStatus)