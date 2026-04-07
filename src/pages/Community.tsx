import PageShell from "@/components/PageShell";
import { motion } from "framer-motion";
import { MessageCircle, Award, Send } from "lucide-react";
import { useState } from "react";

const fade = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } };

interface Post {
  id: number;
  author: string;
  isExpert?: boolean;
  content: string;
  replies: { author: string; content: string; isExpert?: boolean }[];
}

const initialPosts: Post[] = [
  {
    id: 1,
    author: "Farmer Ravi",
    content: "My tomato leaves are turning yellow. What disease could this be?",
    replies: [
      { author: "Farmer Meena", content: "I had the same issue last season. Check for whiteflies underneath." },
      { author: "Dr. Anil (Expert)", content: "This looks like nitrogen deficiency. Apply organic fertilizer.", isExpert: true },
    ],
  },
  {
    id: 2,
    author: "Farmer Sita",
    content: "Best organic pesticide for brinjal? My crop is getting attacked by borers.",
    replies: [
      { author: "Farmer Raj", content: "Try neem oil mixed with water. Spray every 3 days." },
    ],
  },
];

const Community = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (!newPost.trim()) return;
    setPosts([
      { id: Date.now(), author: "You", content: newPost, replies: [] },
      ...posts,
    ]);
    setNewPost("");
  };

  return (
    <PageShell>
      <motion.div {...fade}>
        <h1 className="mb-1 text-xl font-bold">Farmer Community</h1>
        <p className="mb-5 text-sm text-muted-foreground">Ask questions & share knowledge</p>
      </motion.div>

      {/* New Post */}
      <motion.div {...fade} transition={{ delay: 0.05 }} className="mb-5 flex gap-2">
        <input
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addPost()}
          placeholder="Ask a question..."
          className="flex-1 rounded-lg border border-input bg-card px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
        />
        <button onClick={addPost} className="flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
          <Send size={16} /> Post
        </button>
      </motion.div>

      {/* Posts */}
      <div className="space-y-4">
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            {...fade}
            transition={{ delay: 0.08 + i * 0.04 }}
            className="rounded-lg border border-border bg-card p-4 shadow-sm"
          >
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                {post.author[0]}
              </div>
              <span className="text-sm font-semibold">{post.author}</span>
            </div>
            <p className="mb-3 text-sm">{post.content}</p>

            {post.replies.length > 0 && (
              <div className="space-y-2 border-t border-border pt-3">
                {post.replies.map((r, j) => (
                  <div key={j} className="flex gap-2">
                    <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                      r.isExpert ? "bg-success/15 text-success" : "bg-secondary text-secondary-foreground"
                    }`}>
                      {r.isExpert ? <Award size={12} /> : r.author[0]}
                    </div>
                    <div className="text-sm">
                      <span className={`font-medium ${r.isExpert ? "text-success" : ""}`}>{r.author}</span>
                      <p className="text-muted-foreground">{r.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button className="mt-2 flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
              <MessageCircle size={14} /> Reply
            </button>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
};

export default Community;
