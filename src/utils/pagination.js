const paginationLogic = (currentPage, residents) => {
    const residents_per_page=20
    const totalPages=Math.ceil(residents.length/residents_per_page)
    const sliceEnd=currentPage*residents_per_page
    const sliceStart=sliceEnd-residents_per_page
    const residentsInCurrentPage=residents.slice(sliceStart, sliceEnd)
    const pages=[]
    for(let i=1;i<=totalPages;i++)
    {
        pages.push(i)
    }
    return {residentsInCurrentPage, pages}
}
export {paginationLogic}