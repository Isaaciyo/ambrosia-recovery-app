import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Send, Paperclip, Lock, Image as ImageIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";

interface MessagingInterfaceProps {
  role: "athlete" | "physician" | "mental-therapist";
}

const mockConversations = {
  athlete: [
    { id: 1, name: "Dr. Sarah Johnson", role: "Orthopedic Surgeon", unread: 0, lastMessage: "Great progress this week!" },
    { id: 2, name: "Mike Thompson, PT", role: "Physical Therapist", unread: 2, lastMessage: "Don't forget today's exercises" },
    { id: 3, name: "Dr. Emily Chen", role: "Mental Health Therapist", unread: 0, lastMessage: "See you next session" },
  ],
  physician: [
    { id: 1, name: "Jordan Martinez", role: "Patient - ACL Recovery", unread: 1, lastMessage: "Completed all exercises!" },
    { id: 2, name: "Alex Rivera", role: "Patient - Meniscus Tear", unread: 0, lastMessage: "Thanks for the update" },
    { id: 3, name: "Taylor Kim", role: "Patient - Shoulder Injury", unread: 3, lastMessage: "Having some pain today" },
  ],
  "mental-therapist": [
    { id: 1, name: "Jordan Martinez", role: "Patient - ACL Recovery", unread: 0, lastMessage: "Feeling more confident" },
    { id: 2, name: "Sam Chen", role: "Patient - Ankle Injury", unread: 1, lastMessage: "Ready for our session" },
  ],
};

const mockMessages = [
  {
    id: 1,
    sender: "them",
    text: "Hi Jordan! How are you feeling after yesterday's session?",
    time: "9:30 AM",
  },
  {
    id: 2,
    sender: "me",
    text: "Feeling good! The exercises were challenging but manageable.",
    time: "9:45 AM",
  },
  {
    id: 3,
    sender: "them",
    text: "That's great to hear! Remember to ice your knee after each session.",
    time: "9:47 AM",
  },
  {
    id: 4,
    sender: "me",
    text: "Will do! I have a question about the wall squats - how deep should I go?",
    time: "10:15 AM",
  },
  {
    id: 5,
    sender: "them",
    text: "Great question! Start with 45 degrees and gradually work towards 90 degrees. Listen to your body and don't push through pain.",
    time: "10:20 AM",
  },
];

export function MessagingInterface({ role }: MessagingInterfaceProps) {
  const [selectedConvo, setSelectedConvo] = useState(0);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(mockMessages);

  const conversations = mockConversations[role];
  const currentConvo = conversations[selectedConvo];

  const handleSend = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "me",
          text: message,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setMessage("");
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Conversations List */}
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Messages</CardTitle>
          <CardDescription>
            <Lock className="w-3 h-3 inline-block mr-1" />
            End-to-end encrypted
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-1">
            {conversations.map((convo, index) => (
              <div
                key={convo.id}
                className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors border-l-4 ${
                  selectedConvo === index
                    ? "border-blue-600 bg-blue-50"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedConvo(index)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarFallback>
                        {convo.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{convo.name}</p>
                      <p className="text-sm text-gray-600">{convo.role}</p>
                      <p className="text-sm text-gray-500 truncate mt-1">{convo.lastMessage}</p>
                    </div>
                  </div>
                  {convo.unread > 0 && (
                    <Badge variant="default" className="rounded-full">
                      {convo.unread}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Interface */}
      <Card className="md:col-span-2 flex flex-col h-[600px]">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>
                {currentConvo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{currentConvo.name}</CardTitle>
              <CardDescription>{currentConvo.role}</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4 pb-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      msg.sender === "me"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="break-words">{msg.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        msg.sender === "me" ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Paperclip className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ImageIcon className="w-4 h-4" />
              </Button>
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <Button onClick={handleSend}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
              <Lock className="w-3 h-3" />
              Messages are encrypted end-to-end and HIPAA compliant
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
