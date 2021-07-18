import Principal "mo:base/Principal";

actor {
    public shared(msg) func getPrincipal() : async Text {
        return Principal.toText(msg.caller);
    };
}