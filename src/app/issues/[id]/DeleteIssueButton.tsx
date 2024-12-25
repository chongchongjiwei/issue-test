'use client'
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const DeleteIssueButton = ({issueId}:{issueId:number}) => {
  const router= useRouter();
  const [error,setError]= useState(false);
  const OnDelete = async ()=>{
    try{
      axios.delete('/api/issues/'+issueId);
      router.push('/issues');
      router.refresh();
    }catch(error){
      setError(true);
    }
  };
  return (
    <>
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
            <Button color='red' onClick={OnDelete}>确认</Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
    
    <AlertDialog.Root open={error}>
      <AlertDialog.Content>
        <AlertDialog.Title>Error</AlertDialog.Title>
        <AlertDialog.Description>数据删除失败</AlertDialog.Description>
        <Button color='gray' variant='soft' mt ='2' onClick={()=>{setError(false);}}>OK</Button>
      </AlertDialog.Content>
    </AlertDialog.Root>
    </>
  )
}

export default DeleteIssueButton