'use client'
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import React from 'react'

const DeleteIssueButton = ({issueId}:{issueId:number}) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
      <Button color='red'>Delete Issue</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title> 确认删除</AlertDialog.Title>
        <AlertDialog.Description>你确认要删除这个数据吗？</AlertDialog.Description>
        <Flex mt ='4' gap='3'>
          <AlertDialog.Cancel>
            <Button variant='soft' color='gray'>取消</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button color='red'>确认</Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>

    </AlertDialog.Root>
  )
}

export default DeleteIssueButton