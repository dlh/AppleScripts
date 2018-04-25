tell application "Mail"
    if not message viewers = {}
        tell first item of message viewers
            set selected messages to {}
            set selected mailboxes to {}
        end tell
    end if
end tell
