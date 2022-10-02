import React from 'react'
import { QuestionDataWithID } from 'server/fetchExam/types'
import { Network2Data } from './config'

export const Preview: React.FC<{
  content: QuestionDataWithID
}> = ({ content }) => {
  const question = Network2Data(content)
  const str2DOM = (str: string) => (
    <div dangerouslySetInnerHTML={{ __html: str }} />
  )
  return (
    <>
      <h2>题目</h2>
      {str2DOM(question.content)}

      <h2>解析</h2>
      {str2DOM(question.footer.explanation)}
    </>
  )
}