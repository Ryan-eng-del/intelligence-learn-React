import { Divider, Input} from 'antd'
import React, { ReactNode, useState } from 'react'
import { StudentPaperItem } from 'server/fetchExam/types'
import { str2DOM } from 'util/str2DOM'
import { Network2Sutdent } from './config'

// 以此为例，
// 需要展示 题目 选项 分值
// 请更改传入类型
export const Take: React.FC<{
  content: StudentPaperItem & {index?:number}
  setAns: (s: string) => void
}> = ({ content }) => {
  const [ansSet,setAnsSet] = useState<string[]>([])

  const gen = (num: number) => {
    const child: ReactNode[] = []
    for (let i = 0; i < num; i++) {
      ansSet.push('')
      child.push(<div style={{paddingLeft:"40px", margin:"10px"}}>
        <Input key={i} value={ansSet[i]}
          placeholder={`第${i+1}空`}
          onChange={(v)=>{ansSet[i] = v.target.value,setAnsSet([...ansSet])}}
        />
      </div>)
    }
    console.log("input parmater nomber is ", num);

    console.log("Re render one time and this array len is " , child);

    return React.createElement('div', {}, child)
  }
  const question = Network2Sutdent(content)
  console.log(question);

  return (
    <>
      <Divider plain orientation='left'>{`第${content.index}题 - (${question.score}分)`}</Divider>
      <div style={{paddingLeft:"50px"}}>
        {str2DOM(question.content)}
      </div>
      <Divider plain orientation='left'>回答</Divider>
      {gen(question.AnsNum)}
    </>
  )
}