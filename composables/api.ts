export const getUnload = async (response: Ref<any>,id:string | undefined = '') => {
  try {
    (id===undefined)?(id=''):(id='&unload_id='+id)
    response.value = await useAPIFetch(`/e.scripts?page=pages:unload&event=get${id}`);

    return response.value
  } catch (error) {   
    console.error('Произошла ошибка при выполнении запроса:', error);
  } 
};

export const getDataUnload = (response: Ref<any>) =>{  
  const data = JSON.parse(response.value.data);
  return data.response.data
}
