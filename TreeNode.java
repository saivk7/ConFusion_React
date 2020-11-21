import java.util.*;

class TreeNode {
    Map<Character, TreeNode> map;
    boolean leaf;
    List<String> list;
    
    public TreeNode(){
        map = new HashMap<>();
        leaf = false;
        list = new ArrayList<>();
    }
}