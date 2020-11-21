import java.util.*;

class Solution {
    
    List<List<String>> ans = new ArrayList<>();
    
    public List<List<String>> groupAnagrams(String[] strs) {
        
       
        TreeNode root = new TreeNode();
        int num = 0;
        boolean check = false;
        for(String i: strs){
            if(i.length()==0){
                num++;
                check =true;
                continue;
            }
            insert(root,i);
        }
        List<String> zeroList = new ArrayList<>();
        
        while(num>0){
            zeroList.add("");
            num--;
        }
        if(check) ans.add(zeroList);
        dfs(root);
        
        return ans;
    }
    
    void insert(TreeNode root, String s){
        
        char[] arr = s.toCharArray();
        Arrays.sort(arr);
        TreeNode dum = root;
         
        
        for(int i =0;i<arr.length; i++){
            
            Character c= arr[i];
            
            if(dum.map.containsKey(c)){
                
                if(i==arr.length-1){
                    dum.leaf = true;
                    dum.list.add(s);
                    return;
                }
                dum = dum.map.get(c);
                
            }else{
                
                dum.map.put(arr[i], new TreeNode());
                
                if(i==arr.length-1){
                    dum.leaf = true;
                    dum.list.add(s);
                    return;
                }
                dum = dum.map.get(c);
            }
            
                 
        }
        return; 
    }
    
    
    
    void dfs(TreeNode root){
        if(root.leaf==true){
            ans.add(root.list);
        }
        
        for(char c: root.map.keySet()){
            TreeNode dum = root.map.get(c);
            dfs(dum);
        }
            
        

        
    }
    
}

