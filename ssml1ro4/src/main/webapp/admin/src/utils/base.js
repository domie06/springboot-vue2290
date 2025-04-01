const base = {
    get() {
        return {
            url : "http://localhost:8080/ssml1ro4/",
            name: "ssml1ro4",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssml1ro4/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园活动管理平台"
        } 
    }
}
export default base
