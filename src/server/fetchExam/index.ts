import { useMutation, useQuery, UseQueryResult } from '@tanstack/react-query'
import { client } from 'server'
import { delayFetch } from 'util/delayFetch'
import { ExamListItem, QuestionData, QuestionDataWithID, QuestionType } from './types'
import { message } from 'antd'
import { AnyFn } from 'types'

/** 添加试题 */
export const useCreateQuestion = () => {
  return useMutation(
    async (QuestionItem: QuestionData) => {
      await delayFetch()
      return client.post({
        url: 'question/add-question',
        data: {
          ...QuestionItem
        }
      })
    },
    {
      onSuccess: () => {
        message.success('添加成功')
      },
      onError: () => {
        message.error('添加失败')
      }
    }
  )
}

/** 展示题目 */
export const useShowCreateQuestion = () => {
  return useQuery(['questionbank'], async () => {
    await delayFetch()
    return client.get<any>({
      url: 'question/list-question/1'
    })
  })
}

/** 展示题目详细信息 */
export const useShowQuestionDetails = (id?:string) => {
  return useQuery(['preview'], async () => {
    await delayFetch()
    return client.get<any>({
      url: `/question/show-question/${id || 1}`
    })
  })
}

/** 获取此课程的全部试题 */
export const useShowExamList = (courseID: string) => {
  return useQuery([`ExamList-${courseID}`], async () => {
    await delayFetch()
    return client.get<ExamListItem[]>({
      url: `/paper/show-all`,
      params: {
        courseId:courseID
      }
    })
  })
}


/** 添加空试题 */
export const useCreateEmptyQuestion = () => {
  return useMutation(
    async (type: QuestionType) => {
      await delayFetch()
      const defData = {
        questionDescription: "",
        courseId: "",
        pointIds: [],
        questionOption: "dsadas<>fr<>ads<>dsads",
        questionAnswerExplain: "",
        questionAnswerNum: 1,
        questionDifficulty: 1,
        questionType: type,
        rightAnswer: "A",
      }
      const qID = client.post<string>({
        url: 'question/add-question',
        data: defData
      })
      return {...defData,questionId:qID as unknown as string }
    },
    {
      onSuccess: () => {
        message.success('添加成功')
      },
      onError: () => {
        message.error('添加失败')
      }
    }
  )
}

/** 更新题目 */
export const useUpadateQuestion = () => {
  return useMutation(
    async (QuestionItem: QuestionDataWithID) => {
      await delayFetch()
      return client.post({
        url: '/question/update-question',
        data: {
          ...QuestionItem
        }
      })
    },
    {
      onSuccess: () => {
        message.success('添加成功')
      },
      onError: () => {
        message.error('添加失败')
      }
    }
  )
}