os.loadAPI("json")
local ws,err = http.websocket("ws://localhost:7777")

if ws then
    while true do
        local msg = ws.receive()
        local obj = json.decode(msg)
        local func = loadstring(obj["func"])
        func()
    end
else
    print("error")
end
